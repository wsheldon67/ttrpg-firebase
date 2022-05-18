<script lang='ts'>
  import type { Data } from "../character"
  import ObjectViewer from "$lib/c/ObjectViewer.svelte";

  export let character:Data

</script>
<ObjectViewer object={character} />