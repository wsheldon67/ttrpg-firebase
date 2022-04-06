<script lang='ts'>
  import { set_unit, add } from "./current"
  import LzNumber from "$lib/c/LZNumber.svelte"
  import { campaign } from "$lib/campaign"
  import { display } from '$lib/time/display'
  import ClockIcon from '$lib/i/clock.svg'

  $: display_time = display($campaign.time.current, $campaign.time.settings)
  const {one_based, pm_switch} = $campaign.time.settings

  function change(e, unit) {
    if (unit === 'month' || 'day') {
      set_unit(e.detail - one_based, unit, $campaign)
    } else {
      set_unit(e.detail, unit, $campaign)
    }
  }
  function ampm(e) {
    const mod = {AM: -1, PM: 1}
    add(pm_switch * mod[e.target.value], 'hour', $campaign)
  }
</script>

<style>
  .cont :global(input), .cont :global(select) {
    border: none;
    padding-right: 0;
    padding-left: 0;
  }
  .cont {
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 1.5em;
    line-height: 1.5em;
    border: 2px ridge var(--b4);
    width: min-content;
    padding: .125em .25em;
  }
</style>
<div class='cont'>
  <ClockIcon />&nbsp;
  <LzNumber value={display_time.year} on:change={e => change(e, 'year')} digits={4}/>/
  <LzNumber value={display_time.month} on:change={e => change(e, 'month')} />/
  <LzNumber value={display_time.day} on:change={e => change(e, 'day')} />&nbsp;
  <LzNumber value={display_time.hour} on:change={e => change(e, 'hour')} />:
  <LzNumber value={display_time.minute} on:change={e => change(e, 'minute')} />:
  <LzNumber value={display_time.second} on:change={e => change(e, 'second')} />
  {#if display_time.suffix}
    <select value={display_time.suffix} on:input={ampm}>
      <option>AM</option>
      <option>PM</option>
    </select>
  {/if}
</div>