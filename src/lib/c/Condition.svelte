<script lang='ts'>
import { condition_is_applied } from "$lib/data/calc_character";

  import type { Condition, Data } from "$lib/data/character";

  export let character:Data
  export let remove:boolean = false
  export let condition:Condition
  $: disabled = condition_is_applied(character, condition)

  function click() {
    const new_conditions = [...character.conditions]
    new_conditions.find(el => el.name === condition).applied = !remove
    character.conditions = [...new_conditions]
  }
</script>
<button class='p' on:click={click} {disabled}>
  {remove ? '-':'+'}{condition}
</button>