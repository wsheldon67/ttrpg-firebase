<script lang='ts'>
  import { blank, type Data } from "$lib/data/character";

  export let character:Data

  $: disabled = character.conditions.filter(el => el.applied).length === 0

  function click() {
    character.conditions = blank.conditions
  }
</script>
<button on:click={click} class='p' {disabled}>
  Clear Conditions
</button>