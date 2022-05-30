<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { all_moves } from "$lib/data/playbooks/moves";
  import Basic from "../../comp/Moves/Basic.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Moves'>
    {#each character.moves as move}
      <svelte:component this={all_moves.find(el => el.name === move).component} hide start={start+1}/>
    {/each}
    <Basic start={start+1} hide/>
</Header>