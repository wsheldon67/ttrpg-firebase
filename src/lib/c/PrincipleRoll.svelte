<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import type { Move } from "$lib/data/playbooks/moves";
  import { playbook } from "$lib/data/playbooks";
  import { apply_condition } from "$lib/data/calc_character";
  import Roll from "./Roll.svelte"

  export let character:Data
  export let move:Move
  export let results: [string, string, string] = undefined
</script>
<Roll 
  mod={-character.balance + apply_condition(character, move)}
  label={move.name}
  stat={playbook[character.playbook].principles[0].name}
  {results}
/>
<Roll 
  mod={character.balance + apply_condition(character, move)}
  label={move.name}
  stat={playbook[character.playbook].principles[1].name}
  {results}
/>