<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { get_techniques } from "$lib/data/calc_techniques"

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  $: technique_names = character.techniques.map(el => el.name)

</script>
<Header h={1} {start} {hide} title='Techniques'>
  {#await get_techniques(technique_names)}
    Loading...
  {:then techniques} 
    <div class='cardtainer'>
      {#each techniques as technique}
        <div class='card'>
          <svelte:component this={technique.component} start={start+1} hide/>
        </div>
      {/each}
    </div>
  {/await}
</Header>