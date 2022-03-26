<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { signed } from '$lib/pretty'

  export let start: number = 1
  export let show: boolean = true

  let score = 10
  $: modifier = Math.floor((score - 10) / 2)
</script>
<Header h={1} {start} {show} title='Modifiers'>
  <p>The modifier for a score is the score, minus 10, divided by 2 and rounded down:</p>
  <p>(Score - 10)/2, round down</p>
  <label>
    Score:
    <input type='number' bind:value={score} />
  </label>
  <p>Modifier: {signed(modifier)}</p>
</Header>