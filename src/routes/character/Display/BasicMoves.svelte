<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Roll from '$lib/c/Roll.svelte';
  import type { Data } from '$lib/data/character';
  import { Basic } from '$lib/data/playbooks/basic_moves'


  export let character:Data

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Basic Moves'>
  {#each Basic as move}
    <div class='rowl'>
      <div><svelte:component this={move.component} start={start+1} hide/></div>
      {#if move.stat}
        <Roll {character} {move}/>
      {/if}
    </div>
  {/each}
</Header>
<style>
  .rowl {
    display: grid;
    grid-template-columns: auto 6em;
  }
</style>