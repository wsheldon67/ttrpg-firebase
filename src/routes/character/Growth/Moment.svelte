<script lang='ts'>
  import type { Data } from "$lib/data/character"

  export let character:Data
  export let back:Function

  function unlock() {
    character.growth_advancements = [{name: 'Moment of Balance'}, ...character.growth_advancements]
    back()
  }
</script>
<button class='p' on:click={()=>{back()}}>Back</button>
<p>This will unlock your Moment of Balance, a powerful move that you can only use once per unlock.</p>
<button class='p' on:click={unlock}>Do it</button>