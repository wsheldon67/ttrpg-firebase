<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import Balance from '../Display/Balance.svelte'
  import Tooltip from "$lib/c/Tooltip.svelte"

  export let character:Data
  export let back:Function
  let starting_center = Number(character.center)
  $: difference = Math.abs(character.center - starting_center)

  function done() {
    if (difference === 1) {
      character.growth_advancements = [{name: 'Shift Center'} ,...character.growth_advancements]
      back()
    } else if (difference === 0) {
      back()
    }
  }
</script>
<Balance bind:character={character} />
<p>Click on the numbers to move your <Tooltip tip='Represented by the blue glow.'>center</Tooltip>.</p>
{#if difference > 1}
  <p class='no'>Cannot shift balance more than 1 step.</p>
{/if}
<button class='p' on:click={done} disabled={difference > 1}>
  Done
</button>
<style>
  .no {
    color: var(--bad);
  }
</style>