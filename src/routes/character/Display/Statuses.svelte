<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Statuses'>
  <div class='container'>
    <div>
    <Header h={2} {start} title='Positive'>
      {#each character.positive_statuses as status}
        <label>
          <input type='checkbox' bind:checked={status.applied} />
          {status.name}
        </label>
      {/each}
    </Header>
    </div>
    <div>
    <Header h={2} {start} title='Negative'>
      {#each character.negative_statuses as status}
        <label>
          <input type='checkbox' bind:checked={status.applied} />
          {status.name}
        </label>
      {/each}
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
</style>