<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { all_moves } from "$lib/data/playbooks/moves";
  import BalanceMoves from "./BalanceMoves.svelte";
  import BasicMoves from "./BasicMoves.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  // TODO roll component
  // TODO move component, (comp article + roll, depending on listed stat)
</script>
<Header h={1} {start} {hide} title='Moves'>
    {#each character.moves as move}
      <svelte:component this={all_moves.find(el => el.name === move).component} hide start={start+2}/>
    {/each}
    <BasicMoves {character} start={start+1} hide/>
    <BalanceMoves {character} start={start+1} hide/>
</Header>