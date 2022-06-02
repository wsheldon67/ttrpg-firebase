<script lang='ts'>
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let name:string
  export let source:string
  export let label:string

  function click() {
    character.bonuses = [{name, source}, ...character.bonuses]
  }
</script>
<button class='p' on:click={click}>
  {label}
</button>