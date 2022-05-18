<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import { playbooks } from "../playbooks";

export let character
$: playbook = playbooks[character.playbook]

let current_demeanor = ''

function demeanor_keyboard(e) {
  if (e.key === 'Enter') {
    add_demeanor()
  }
}
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
</style>
<label>
  Hometown:
  <input type='text' bind:value={character.hometown}/>
</label>
<label>
  <Tooltip tip="Recommended: Above-it-all, Perfectionist, Chilly, Rebelious, Flippant, Standoffish">Demeanors:</Tooltip>
  <input
    type='text'
    on:keypress={demeanor_keyboard}
    bind:value={current_demeanor}
  />
</label>
<div>
  {#each character.demeanors as demeanor}
    <button on:click={()=>{remove_demeanor(demeanor)}}>
      X
    </button>
    {demeanor}
  {/each}
</div>
<label>
  Look:
  <textarea bind:value={character.look}></textarea>
</label>
{#each character.history as question_text, index}
  <label>
    {playbook.history[index]}
    <textarea bind:value={question_text}></textarea>
  </label>
{/each}