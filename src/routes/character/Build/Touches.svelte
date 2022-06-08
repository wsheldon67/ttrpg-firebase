<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import type { Data } from "$lib/data/character";
import { playbook as playbooks } from "$lib/data/playbooks";

export let character:Data
$: playbook = playbooks[character.playbook]
$: full_history = [...playbook.history, 'Why are you committed to this group or purpose?']

let current_demeanor = ''

function add_demeanor() {
  character.demeanors = [...character.demeanors, current_demeanor]
  current_demeanor = ''
}
function remove_demeanor(demeanor:string) {
  character.demeanors = character.demeanors.filter(el => el !== demeanor)
}
</script>
<style>
  label {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: .5em;
  }
  .demeanors {
    display: grid;
    grid-template-columns: repeat(6, 1.2em 5em);
    margin-bottom: 1em;
  }
  .demeanors > button:hover + span {
    text-decoration: line-through;
  }
  .demeanors > button {
    background-color: var(--b4);
  }
  p {
    margin: 1em .25em;
  }
</style>
<label>
  Hometown:
  <input type='text' bind:value={character.hometown}/>
</label>
<form on:submit|preventDefault={add_demeanor}>
<label>
  <Tooltip tip={`Recommended: ${playbook.demeanors.join(', ')}`}>Demeanors:</Tooltip>
  <input
    type='text'
    bind:value={current_demeanor}
    list='demeanors'
  />
</label>
</form>
<datalist id='demeanors'>
  {#each playbook.demeanors as demeanor}
    <option>{demeanor}</option>
  {/each}
</datalist>
<div class='demeanors'>
  {#each character.demeanors as demeanor}
    <button on:click={()=>{remove_demeanor(demeanor)}}>
      X
    </button>
    <span>{demeanor}</span>
  {/each}
</div>
<label>
  Look:
  <textarea bind:value={character.look}></textarea>
</label>
<p>Note: For best results, write full sentences in first person.</p>
{#each character.history as question_text, index}
  <label>
    {full_history[index]}
    <textarea bind:value={question_text}></textarea>
  </label>
{/each}