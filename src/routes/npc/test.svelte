<script lang='ts'>
  import { blank } from "$lib/data/npc";
  import Edit from './edit.svelte'
  import Display from "./_Display.svelte";

  let npc = blank
</script>
<Edit bind:npc={npc} />
<hr />
<Display bind:npc={npc} />