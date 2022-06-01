<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import { signed } from "$lib/pretty";

  export let character:Data
  export let amt:number = 1

  function click() {
    character.fatigue += amt
  }
  // TODO bounds, disable
</script>
<button class='p' on:click={click}>
  {signed(amt)} Fatigue
</button>