<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import Display from '../Display/index.svelte'

  export let character:Data

</script>
<Display bind:character={character} />