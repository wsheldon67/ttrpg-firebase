<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import { signed } from "$lib/pretty";

  export let character:Data
  export let amt:number = 1

  function click() {
    character.growth += amt
  }
</script>
<button class='p' on:click={click}>
  {signed(amt)} Growth
</button>