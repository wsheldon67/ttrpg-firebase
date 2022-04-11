<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Settings } from '$lib/time';
  import { campaign } from '$lib/campaign'

  export let start: number = 1
  export let show: boolean = true

  const list_units: string[] = ['minutes', 'hours', 'days', 'weeks']
  const paces = {
    fast: {minute: 400, hour: 4*5280, day: 30*5280},
    normal: {minute: 300, hour: 3*5280, day: 24*5280},
    slow: {minute: 200, hour: 2*5280, day: 18*5280}
  }
  const time_settings:Settings = $campaign.time.settings
  const {hours_in_day, weekdays} = time_settings
  let travel_hours = Math.floor(hours_in_day / 3)
  $: forced = travel_hours - Math.floor(hours_in_day / 3)

  $: time_units = {
    minutes: 1,
    hours: 60,
    days: 60 * travel_hours,
    weeks: 60 * travel_hours * weekdays.length
  }

  let amt = 1
  let unit = 'hours'
  let difficult = false

  $: diff_terr = difficult ? 2 : 1

  function get_dist(pace:string, amt:number, unit:string, mult: number, time_units):string{
    const minutes = amt * time_units[unit]
    let feet:number
    if (minutes < 60) {
      feet = minutes * paces[pace].minute / mult
    } else if (minutes < time_units.days) {
      feet = (minutes * paces[pace].hour) / (60 * mult)
    } else {
      feet = (minutes * paces[pace].day) / (60 * 8 * mult)
    }
    let text
    if (feet < 5280 / 2) {
      text = feet + 'ft'
    } else if (feet < 5280 * 10) {
      text = (feet / 5280).toFixed(1) + 'mi'
    } else {
      text = Math.round(feet / 5280) + 'mi'
    }
    return text
  }

  $: fast = get_dist('fast', amt, unit, diff_terr, time_units)
  $: normal = get_dist('normal', amt, unit, diff_terr, time_units)  
  $: slow = get_dist('slow', amt, unit, diff_terr, time_units)

</script>
<Header h={1} {start} {show} title='Time'>
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
    Time:
    <input type='number' bind:value={amt}/>
    <select bind:value={unit}>
      {#each list_units as label}
        <option>{label}</option>
      {/each}
    </select>
  </label>
  <table>
    <tr>
      <th>Pace</th>
      <th>Distance</th>
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