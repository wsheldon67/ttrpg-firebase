<script lang='ts'>
  import type { Data } from "../../../../.svelte-kit/types/src/routes/character/atla/character"
  import ObjectViewer from "$lib/c/ObjectViewer.svelte";

  export let character:Data

</script>
<ObjectViewer object={character} />