<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  //TODO shannon
</script>
<Header h={1} {start} {hide} title='Double Heritage'>

</Header>