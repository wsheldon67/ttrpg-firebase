<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { quick } from "$lib/data/quick_tips";
  import type { Data } from '$lib/data/character'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

</script>
<Header h={1} {start} {hide} title={'Conditions: ' + character.conditions.filter(el => el.applied).length + '/5'}>
  <div>
    {#each character.conditions as condition}
      <label>
        <input type='checkbox' bind:checked={condition.applied} />
        <Tooltip tip={quick[condition.name.toLowerCase()]}>{condition.name}</Tooltip>
      </label>
    {/each}
  </div>
</Header>
<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>