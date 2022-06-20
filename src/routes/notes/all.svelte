<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { isGM } from "$lib/display_name";
  import { onMount } from "svelte";
  import All from "./_all.svelte";
  
  let gm:boolean

  onMount(isGM($campaign, res => gm = res))
</script>
<a href='/notes' class='p'>Browse Tags</a>
<h1>All Notes</h1>
<All />
{#if gm}
  <h1>GM Notes</h1>
  <All {gm} />
{/if}