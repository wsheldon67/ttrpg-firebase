<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import { get_all_stats } from "$lib/data/calc_character";
  import type { Data } from '$lib/data/character'
  import { signed } from "$lib/pretty";
  import Balance from "./Balance.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  $: stats = get_all_stats(character)

</script>
<Header h={1} {start} {hide} title='Stats'>
  <div class='cont'>
    {#each stats as {name, mod}}
      <button class='p'>
        {name} {signed(mod)}
      </button>
    {/each}
  </div>
  <Balance bind:character={character} />
</Header>

<style>
  .cont {
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>