<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { techniques } from '$lib/data/techniques'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  function check(index:number, level:number) {
    character.techniques[index].level = level
  }
</script>
<Header h={1} {start} {hide} title='Techniques'>

  {#each character.techniques as {name, level}, index}
  <div class='cont'>
    <svelte:component this={techniques.find(el => el.name === name).component} start={start+1} bind:character={character} hide/>
    <label>
      <input type='checkbox' checked/>
      Learned
    </label>
    <label>
      <input type='checkbox' checked={level > 1} on:input={()=>{check(index, 2)}}/>
      Practiced
    </label>
    <label>
      <input type='checkbox' checked={level > 2} on:input={()=>{check(index, 3)}}/>
      Mastered
    </label>
  </div>
  {/each}

</Header>

<style>
  .cont {
    background-color: var(--b2);
    margin-bottom: .5em;
  }
</style>