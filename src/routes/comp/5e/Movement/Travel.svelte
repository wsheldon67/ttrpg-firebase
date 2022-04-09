<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Distance from './Distance.svelte'

  export let start: number = 1
  export let show: boolean = true
  const low = start + 1

  const time_units: {label: string, value: number}[] = [
    {label: 'rounds', value: 6}
  ]
</script>
<Header h={1} {start} {show} title='Travel'>
  <Distance start={low} />
  <label>
    Time:
    <input type='number' />
    <select>
      {#each time_units as {label, value}}
        <option {value}>{label}</option>
      {/each}
    </select>
  </label>
</Header>