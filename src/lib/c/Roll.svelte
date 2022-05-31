<script lang='ts'>
  import { get_basic_move_stat } from "$lib/data/calc_character";
  import type { Data } from "$lib/data/character";
  import type { Move } from "$lib/data/playbooks/moves";
  import { signed } from "$lib/pretty";

  export let character:Data
  export let move:Move
  $: stat = get_basic_move_stat(character, move)
</script>
<button>
  {move.stat} {signed(stat)}
</button>
<style>
  button {
    height: 1.8em;
    background-color: var(--p);
    color: var(--at);
    margin-top: .4em;
    width: 100%;
  }
</style>