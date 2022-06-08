<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '../moves';
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Condition from '$lib/c/Condition.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="I Don't Hate You">
  <div slot='header' class='buttons'>
    {#if character && move}
    <Condition bind:character={character} condition='Insecure'/>
    <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p><Tip text='Guide and comfort'/> someone in an awkward, understated, or idiosyncratic fashion:</p>
  <ul>
    <li>Mark <Tip text='insecure'/> if it is not already marked.</li>
    <li>Roll with <Tip text='Passion'/> instead of <Tip text='Harmony'/>.</li>
  </ul>
</Header>
<style>
  .buttons {
    display: flex;
    flex-direction: row;
  }
  .buttons :global(button) {
    height: 100%;
    width: max-content;
  }
</style>