<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { all_moves } from '$lib/data/playbooks/moves'
  import type { Move } from '$lib/data/playbooks/moves'

  export let character:Data
  export let back:Function
  let other_moves:Move[] = all_moves.filter(el => !el.tags.includes(character.playbook))
  let selected:string
  $: filtered_moves = other_moves
    .filter(el => !character.moves.includes(el.name))

  function save() {
    character.moves = [selected, ...character.moves]
    character.growth_advancements = [{name: 'Other Playbook'}, ...character.growth_advancements]
    back()
  }
  // TODO add filtering
</script>
<button class='p' on:click={()=>{back()}}>Back</button>
<button class='p' on:click={save} disabled={!selected}>Save</button>
<div class='cardtainer'>
{#each filtered_moves as {component, name}}
  <button
    class='card'
    class:selected={selected === name}
    on:click={()=>{selected = name}}
    >
    <svelte:component this={component} start={2} hide/>
  </button>
{/each}
</div>