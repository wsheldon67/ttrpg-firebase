<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import { signed } from "$lib/pretty";

  export let character:Data
  export let amt:number = 1

  $: disabled = (amt > 0 && character.fatigue >= 5) || (amt < 0 && character.fatigue <= 0)

  function click() {
    character.fatigue += amt
    if (character.fatigue > 5) {character.fatigue = 5}
    if (character.fatigue < 0) {character.fatigue = 0}
  }
</script>
<button class='p' on:click={click} {disabled}>
  {signed(amt)} Fatigue
</button>