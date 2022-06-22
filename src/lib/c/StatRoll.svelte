<script lang='ts'>
  import { get_basic_move_stat } from "$lib/data/calc_character";
  import type { Data } from "$lib/data/character";
  import type { Move } from "$lib/data/playbooks/moves";
  import Roll from "./Roll.svelte";

  export let character:Data
  export let move:Move
  export let results: [string, string, string] = undefined
</script>
<Roll 
mod={get_basic_move_stat(character, move)}
label={move.name}
stat={move.stat}
{results}
/>