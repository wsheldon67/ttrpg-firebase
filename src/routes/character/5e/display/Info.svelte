<script lang='ts'>
  import ObjectViewer from "$lib/c/ObjectViewer.svelte";
  import type { Character } from "../UI";

  export let c:Character

</script>
<ObjectViewer object={c.info}/>