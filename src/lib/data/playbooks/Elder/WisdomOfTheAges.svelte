<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Wisdom of the Ages'>

</Header>