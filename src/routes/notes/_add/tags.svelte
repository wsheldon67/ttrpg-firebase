<script lang='ts'>
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let note = {tags:[]}

let selected:string[] = note.tags

function add (e) {
  if (e.code !== 'Enter') {return}
  else {e.preventDefault()}
  const tag:string = e.target.value
  selected = [...selected, tag]
  dispatch('change', selected)
  e.target.value = ''
}
function remove (e) {
  const tag:string = e.target.value
  selected = selected.filter(el => el !== tag)
  dispatch('change', selected)
}
 
</script>
<label>
  Tags
  <input on:keydown={add} />
</label>
<div>
  {#each selected as one}
    <button on:click|preventDefault={remove} value={one}>
      {one}
    </button>
  {/each}
</div>