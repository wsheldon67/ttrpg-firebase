<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import { Balance } from '$lib/data/playbooks/balance_moves'
  import Move from '$lib/c/Move.svelte';

  export let character:Data
  export let start: number = 1
  export let hide: boolean = false

</script>
<Header h={1} {start} {hide} title='Balance Moves'>
  {#each Balance as move}
    <Move bind:character={character} {move} start={start+1}/>
  {/each}
</Header>