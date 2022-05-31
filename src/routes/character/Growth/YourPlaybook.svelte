<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { moves } from '$lib/data/playbooks/moves'

  export let character:Data
  export let back:Function
  let selected:string
  $: filtered_moves = moves[character.playbook]
    .filter(el => !character.moves.includes(el.name))

  function save() {
    character.moves = [selected, ...character.moves]
    character.growth_advancements = [{name: 'Your Playbook'}, ...character.growth_advancements]
    back()
  }
</script>
<button class='p' on:click={()=>{back()}}>Back</button>
<button class='p' on:click={save} disabled={!selected}>Save</button>
<div class='cardtainer'>
  {#each filtered_moves as {component, name}}
    <button class='card' on:click={()=>{selected = name}} class:selected={name === selected}>
      <svelte:component this={component} start={2} hide/>
    </button>
  {/each}
</div>