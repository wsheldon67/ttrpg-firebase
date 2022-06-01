<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Move from '$lib/c/Move.svelte';
  import type { Data } from '$lib/data/character';
  import { Basic } from '$lib/data/playbooks/basic_moves'


  export let character:Data

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Basic Moves'>
  {#each Basic as move}
    <Move bind:character={character} {move} start={start+1}/>
  {/each}
</Header>