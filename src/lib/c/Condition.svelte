<script lang='ts'>
  import type { Condition, Data } from "$lib/data/character";

  export let character:Data
  export let remove:boolean = false
  export let condition:Condition

  function click() {
    character.conditions.find(el => el.name === condition).applied = !remove
  }
</script>
<button class='p' on:click={click}>
  {remove ? '-':'+'}{condition}
</button>