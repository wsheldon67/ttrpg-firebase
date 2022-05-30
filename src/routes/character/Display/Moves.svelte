<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { all_moves } from "$lib/data/playbooks/moves";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Moves'>
  <div class='cardtainer'>
    {#each character.moves as move}
    <div class='card'>
      <svelte:component this={all_moves.find(el => el.name === move).component} hide start={start+1}/>
    </div>
    {/each}
  </div>
</Header>