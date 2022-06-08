<script lang='ts'>
  import { plural, signed } from '$lib/pretty';
  import { moves } from '$lib/data/playbooks/moves'
  import { playbook } from '$lib/data/playbooks';
  import { get_all_stats, stat_positions } from '$lib/data/calc_character';
  import Select from './_Select.svelte';
  export let character

  $: realized_stats = get_all_stats(character)

  function select_move(move_name:string) {
    if (character.moves.includes(move_name)) {
      character.moves = character.moves.filter(el => el !== move_name)
    } else if (character.moves.length == 2) {
      character.moves[1] = move_name
    } else {
      character.moves = [...character.moves, move_name]
    }
  }
</script>
<style>
  .highlighted {
    box-shadow: 0em 0em .5em 0em var(--good) inset, 0em 0em 1em 0em var(--good);
  }
</style>
<p>Take +1 to a stat:</p>
<div>
  {#each realized_stats as {name, mod}, index}
    <label class:highlighted={character.boosted_stats[0] === name}>
      <input
        type='radio'
        name='stat'
        value={name}
        bind:group={character.boosted_stats[0]}

        disabled={playbook[character.playbook].stats[stat_positions[name]] >= 2}
      />
      {name} ({signed(mod)})
    </label>
  {/each}
</div>
<p>Choose {plural(2-character.moves.length, 'move')}:</p>
<p>Moves that use your boosted stat are highlighted.</p>
<div class='cardtainer'>
{#each moves[character.playbook] as {component, stat, name}}
  <div
    class='card'
    class:highlighted={stat === character.boosted_stats[0]}
    class:selected={character.moves.includes(name)}
  >
    <svelte:component this={component} hide start={2}>
      <Select selected={character.moves.includes(name)} on:click={()=>select_move(name)} />
    </svelte:component>
  </div>
{/each}
</div>