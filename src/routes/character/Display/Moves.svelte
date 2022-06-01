<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Move from "$lib/c/Move.svelte";
  import type { Data } from '$lib/data/character'
  import { all_moves } from "$lib/data/playbooks/moves";
  import BalanceMoves from "./BalanceMoves.svelte";
  import BasicMoves from "./BasicMoves.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  
</script>
<Header h={1} {start} {hide} title='Moves'>
    {#each character.moves as move}
      <Move {character} move={all_moves.find(el => el.name === move)} start={start+2}/>
    {/each}
    <BasicMoves {character} start={start+1} hide/>
    <BalanceMoves {character} start={start+1} hide/>
</Header>