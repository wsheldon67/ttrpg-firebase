<script lang='ts'>
  import { get_all_stats } from "$lib/data/calc_character";
  import type { Data, Stat } from "$lib/data/character"
  import { signed } from "$lib/pretty";

  export let character:Data
  export let back:Function
  $: stats = get_all_stats(character)

  function raise(stat:Stat) {
    character.boosted_stats = [stat, ...character.boosted_stats]
    character.growth_advancements = [{name: 'Stat'}, ...character.growth_advancements]
    back()
  }
</script>
<button class='p' on:click={()=>{back()}}>Back</button>
<p>Pick a stat to raise:</p>
<div>
  {#each stats as {name, mod}}
    <button class='p' on:click={()=>{raise(name)}}>
      {name} ({signed(mod)})
    </button>
  {/each}
</div>
<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>