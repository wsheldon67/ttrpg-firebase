<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
import Tooltip from "$lib/c/Tooltip.svelte";
  import type { Data } from '$lib/data/character'
import { quick } from "$lib/data/quick_tips";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Statuses'>
  <div class='container'>
    <div>
    <Header h={2} {start} title='Positive'>
      <div class='statustainer'>
      {#each character.positive_statuses as status}
        <label>
          <input type='checkbox' bind:checked={status.applied} />
          <Tooltip tip={quick[status.name.toLowerCase()]}>{status.name}</Tooltip>
        </label>
      {/each}
      </div>
    </Header>
    </div>
    <div>
    <Header h={2} {start} title='Negative'>
      <div class='statustainer'>
      {#each character.negative_statuses as status}
        <label>
          <input type='checkbox' bind:checked={status.applied} />
          <Tooltip tip={quick[status.name.toLowerCase()]}>{status.name}</Tooltip>
        </label>
      {/each}
      </div>
    </Header>
    </div>
  </div>
</Header>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .container > div {
    width: 48%;
  }
  .statustainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>