<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { techniques } from '$lib/data/techniques'
  import Stance from "../../../routes/comp/Combat/Stance.svelte";
  import { Basic } from '$lib/data/techniques/Basic'
import Tags from "$lib/data/techniques/Tags.svelte";

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
  <p>Choose an approach and then roll using the Stance Move:</p>
  <Stance {character} start={start+1} hide/>
  <p>Use a technique that uses the approach you chose:</p>
  {#each combo_techniques as {level, component, tags, name}, index}
  <div class='cont'>
    <svelte:component this={component} start={start+1} bind:character={character} hide/>
    <div class='row'>
      <div>
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
      </div>
      <div class='tags'>
        <Tags technique={{name, component, tags}} />
      </div>
    </div>
  </div>
  {/each}
  {#each Basic as technique}
    <div class='cont'>
      <svelte:component this={technique.component} start={start+1} bind:character={character} hide/>
      <div class='row'>
        <label>
          <input type='checkbox' checked disabled/>
          Basic
        </label>
        <Tags {technique}/>
      </div>
    </div>
  {/each}
</Header>

<style>
  .cont {
    background-color: var(--b2);
    margin-bottom: .5em;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .row > :global(div) {
    width: max-content;
    height: 1em;
  }
  .row :global(.cont) {
    height: 1em;
  }
  .tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>