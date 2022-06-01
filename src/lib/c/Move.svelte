<script lang='ts'>
  import { apply_condition, get_basic_move_stat } from "$lib/data/calc_character";
  import { stats, type Data } from "$lib/data/character";
  import { playbook } from "$lib/data/playbooks";
  import type { Move } from "$lib/data/playbooks/moves";
  import Roll from "./Roll.svelte";

  export let move:Move
  export let character:Data
  export let start:number = 1

  $: is_stat = ['Their Principle', 'No Stat',...stats].includes(move.stat as any)

  function number_of_rolls():string {
    if (is_stat) {return 'rolls one_roll'}
    if (move.stat === 'Principle') {return 'rolls two_rolls'}
    if (move.stat) {return 'rolls one_roll'}
    return ''
  }
</script>
<svelte:component this={move.component} bind:character={character} {start} {move} hide/>
<!--div class={number_of_rolls()}>
  {#if is_stat}
    <Roll 
      mod={get_basic_move_stat(character, move)}
      label={move.name}
      stat={move.stat}
    />
  {:else if move.stat === 'Principle'}
    <Roll 
      mod={-character.balance + apply_condition(character, move)}
      label={move.name}
      stat={playbook[character.playbook].principles[0].name}
    />
    <Roll 
      mod={character.balance + apply_condition(character, move)}
      label={move.name}
      stat={playbook[character.playbook].principles[1].name}
    />
  {/if}
</div-->