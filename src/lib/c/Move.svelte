<script lang='ts'>
  import { get_basic_move_stat } from "$lib/data/calc_character";
  import { stats, type Data } from "$lib/data/character";
  import { playbook } from "$lib/data/playbooks";
  import type { Move } from "$lib/data/playbooks/moves";
  import Roll from "./Roll.svelte";

  export let move:Move
  export let start:number = 1
  export let character:Data

  $: is_stat = stats.includes(move.stat as any)

  function number_of_rolls():string {
    if (is_stat) {return 'one_roll'}
    if (move.stat === 'Principle') {return 'two_rolls'}
    if (move.stat) {return 'one_roll'}
    return ''
  }
</script>

<div class={number_of_rolls()}>
  <svelte:component this={move.component} {start} hide>
    {#if is_stat}
      <Roll 
        mod={get_basic_move_stat(character, move)}
        label={move.name}
        stat={move.stat}
      />
    {:else if move.stat === 'Principle'}
      <Roll 
        mod={-character.balance}
        label={move.name}
        stat={playbook[character.playbook].principles[0].name}
      />
      <Roll 
        mod={character.balance}
        label={move.name}
        stat={playbook[character.playbook].principles[1].name}
      />
    {/if}
  </svelte:component>
</div>

<style>
  .one_roll > :global(h3) {
    display: grid;
    grid-template-columns: auto 6em;
  }
  .two_rolls > :global(h3) {
    display: grid;
    grid-template-columns: auto max-content max-content;
  }
</style>