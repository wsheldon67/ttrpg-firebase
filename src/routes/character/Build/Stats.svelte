<script lang='ts'>
import { plural } from '$lib/pretty';

  import { moves } from '$lib/data/moves'
  export let character

  const stats = ['Creativity', 'Focus', 'Harmony', 'Passion']

  function select_move(move_name:string) {
    if (character.playbook_moves.includes(move_name)) {
      character.playbook_moves = character.playbook_moves.filter(el => el !== move_name)
    } else if (character.playbook_moves.length == 2) {
      character.playbook_moves[1] = move_name
    } else {
      character.playbook_moves = [...character.playbook_moves, move_name]
    }
  }
</script>
<style>
  .highlighted {
    box-shadow: 0em 0em 1em 0em var(--good);
  }
</style>
<p>Take +1 to a stat:</p>
<div>
  {#each stats as stat}
    <label>
      <input
        type='radio'
        name='stat'
        value={stat}
        bind:group={character.boosted_stats[0]}
        class:highlighted={character.boosted_stats[0] === stat}
      />
      {stat}
    </label>
  {/each}
</div>
<p>Choose {plural(2-character.playbook_moves.length, 'move')}:</p>
<div class='cardtainer'>
{#each moves[character.playbook] as {component, stat, name}}
  <button
    class='card'
    class:highlighted={stat === character.boosted_stats[0]}
    class:selected={character.playbook_moves.includes(name)}
    on:click={()=>{select_move(name)}}
  >
    <svelte:component this={component} hide start={2}/>
  </button>
{/each}
</div>