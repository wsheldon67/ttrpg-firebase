<script lang='ts'>
  import { plural, signed } from '$lib/pretty';
  import { moves } from '$lib/data/playbooks/moves'
  import { playbook } from '$lib/data/playbooks';
  import { get_stats, stat_positions } from '$lib/data/calc_character';
  export let character

  const stats = ['Creativity', 'Focus', 'Harmony', 'Passion']
  $: realized_stats = get_stats(character)

  function select_move(move_name:string) {
    if (character.moves.includes(move_name)) {
      character.moves = character.moves.filter(el => el !== move_name)
    } else if (character.moves.length == 2) {
      character.moves[1] = move_name
    } else {
      character.moves = [...character.moves, move_name]
    }
  }
  // TODO button/drop down combo is confusing.
  // Move selector to button inside Header (using content API)
</script>
<style>
  .highlighted {
    box-shadow: 0em 0em 1em 0em var(--good);
  }
</style>
<p>Take +1 to a stat:</p>
<div>
  {#each stats as stat, index}
    <label>
      <input
        type='radio'
        name='stat'
        value={stat}
        bind:group={character.boosted_stats[0]}
        class:highlighted={character.boosted_stats[0] === stat}
        disabled={playbook[character.playbook].stats[stat_positions[stat]] >= 2}
      />
      {stat} ({signed(realized_stats[index])})
    </label>
  {/each}
</div>
<p>Choose {plural(2-character.moves.length, 'move')}:</p>
<div class='cardtainer'>
{#each moves[character.playbook] as {component, stat, name}}
  <button
    class='card'
    class:highlighted={stat === character.boosted_stats[0]}
    class:selected={character.moves.includes(name)}
    on:click={()=>{select_move(name)}}
  >
    <svelte:component this={component} hide start={2}/>
  </button>
{/each}
</div>