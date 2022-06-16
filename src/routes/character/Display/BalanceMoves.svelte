<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import { Balance } from '$lib/data/playbooks/balance_moves'

  export let character:Data
  export let start: number = 1
  export let hide: boolean = false

</script>
<Header h={1} {start} {hide} title='Balance Moves'>
  {#each Balance as move}
  <svelte:component this={move.component} bind:character={character} start={start+1} {move} hide/>
  {/each}
</Header>