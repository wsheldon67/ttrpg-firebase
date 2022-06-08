<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Move from "$lib/c/Move.svelte";
  import type { Data } from '$lib/data/character'
  import { all_moves } from "$lib/data/playbooks/moves";
  import Training from "../../../routes/comp/Techniques/Training.svelte";
  import BalanceMoves from "./BalanceMoves.svelte";
  import BasicMoves from "./BasicMoves.svelte";
  import MomentOfBalance from "./MomentOfBalance.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  export let id:string
  $: moments_unlocked = character.growth_advancements.filter(el => el.name === 'Moment of Balance').length
  
</script>
<Header h={1} {start} {hide} title='Moves'>
    {#if moments_unlocked > character.moments_used}
      <MomentOfBalance start={start+2} bind:character={character}/>
    {/if}
    {#each character.moves as move}
      <Move bind:character={character} move={all_moves.find(el => el.name === move)} start={start+2}/>
    {/each}
    <BasicMoves bind:character={character} start={start+1} hide/>
    <BalanceMoves bind:character={character} start={start+1} hide/>
    <Training {id} bind:character={character} hide start={start+1}/>
</Header>