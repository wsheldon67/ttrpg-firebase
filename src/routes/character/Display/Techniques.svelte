<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { techniques } from '$lib/data/techniques'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  function check(e, index:number, level:number) {
    if (e.target.checked) {
      character.techniques[index].level = level
    } else {
      character.techniques[index].level = level - 1
    }
    
  }
  $: combo_techniques = character.techniques.map((el) => {
    const technique = techniques.find(ell => ell.name === el.name)
    return {...el, ...technique}
  })
</script>
<Header h={1} {start} {hide} title='Techniques'>

  {#each combo_techniques as {level, component, tags}, index}
  <div class='cont'>
    <svelte:component this={component} start={start+1} bind:character={character} hide/>
    <label>
      <input type='checkbox' checked disabled class='learned'/>
      Learned
    </label>
    <label>
      <input type='checkbox' checked={level > 1} on:input={(e)=>{check(e, index, 2)}}/>
      Practiced
    </label>
    <label>
      <input type='checkbox' checked={level > 2} on:input={(e)=>{check(e, index, 3)}}/>
      Mastered
    </label>
    <span class={'approach '+tags[1].substring(0,1)}>{tags[1]}</span>
  </div>
  {/each}

</Header>

<style>
  .cont {
    background-color: var(--b2);
    margin-bottom: .5em;
  }
  .D {
    background-color: var(--good);
    color: var(--at);
  }
  .A {
    background-color: var(--bad);
    color: var(--at);
  }
  .E {background-color: var(--b6);}
  .approach {
    padding: .125em;
    border-radius: .25em;
    margin-left: 1em;
  }
</style>