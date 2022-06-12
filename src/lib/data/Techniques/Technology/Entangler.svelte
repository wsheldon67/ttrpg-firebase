<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
  //TODO lee
</script>
<Header h={1} {start} {hide} title="Entangler">
  
</Header>