<script lang='ts'>
import Header from "$lib/c/Header.svelte";
import Tooltip from "$lib/c/Tooltip.svelte";

  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  function remove(name:string) {
    character.bonuses = character.bonuses.filter(el => el.name !== name)
  }
</script>
<Header h={1} {start} {hide} title='Bonuses'>
  <div class='cont'>
    {#each character.bonuses as {name, source}}
      <button on:click={()=>{remove(name)}}>X</button>
      <p><Tooltip tip={'From ' + source}>{name}</Tooltip></p>
    {/each}
  </div>
</Header>

<style>
  .cont {
    display: grid;
    grid-template-columns: 1.5em auto;
  }
</style>