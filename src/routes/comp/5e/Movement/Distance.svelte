<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { duration_abbr } from '$lib/pretty';
  import { settle, trunc } from '$lib/time'
  import type { Time } from '$lib/time';
  import { campaign } from '$lib/campaign'

  export let start: number = 1
  export let show: boolean = true
  let travel_hours = Math.floor($campaign.time.settings.hours_in_day / 3)
  const non_forced = Math.floor($campaign.time.settings.hours_in_day / 3)
  $: forced = travel_hours - non_forced

  const distances: string[] = ['feet', 'miles']
  $: paces = {
    fast: {minute: 400, hour: 4*5280, day: 30*5280*travel_hours/8},
    normal: {minute: 300, hour: 3*5280, day: 24*5280*travel_hours/8},
    slow: {minute: 200, hour: 2*5280, day: 18*5280*travel_hours/8}
  }

  let amt = 3
  let unit = 'miles'
  let difficult = false

  $: diff_terr = difficult ? 2 : 1

  function get_time (pace:string, amt, unit, mod, paces):string {
    const {minute, hour, day} = paces[pace]
    const dist = (unit==='feet' ? amt : amt * 5280)
    let tt:Time = {year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0}
    if (dist < hour) {
      tt.minute = dist * mod / minute
    } else if (dist < day) {
      tt.hour = dist * mod / hour
    } else {
      tt.day = dist * mod / day
    }
    return duration_abbr(trunc(settle(tt, $campaign.time.settings, true)))
  }

  $: fast = get_time('fast', amt, unit, diff_terr, paces)
  $: normal = get_time('normal', amt, unit, diff_terr, paces)
  $: slow = get_time('slow', amt, unit, diff_terr, paces)

</script>
<Header h={1} {start} {show} title='Distance'>
  <label>
    <input type='checkbox' bind:checked={difficult} />
    Difficult Terrain
  </label>
  <label>
    Hours per Day:
    <input bind:value={travel_hours} type='number' />
  </label>
  {#if forced > 0}
    <div>Forced March ({forced}h)</div>
  {/if}
  <label>
    Distance:
    <input type='number' bind:value={amt}/>
    <select bind:value={unit}>
      {#each distances as label}
        <option>{label}</option>
      {/each}
    </select>
  </label>
  <table>
    <tr>
      <th>Pace</th>
      <th>Time</th>
      <th>Effect</th>
    </tr>
    <tr>
      <td>Fast</td>
      <td>{fast}</td>
      <td>-5 penalty to passive perception</td>
    </tr>
    <tr>
      <td>Normal</td>
      <td>{normal}</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Slow</td>
      <td>{slow}</td>
      <td>Able to use stealth</td>
    </tr>
  </table>
</Header>