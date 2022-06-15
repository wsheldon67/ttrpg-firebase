<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { isGM } from "$lib/display_name";
  import { onMount } from "svelte";
import All from "./_all.svelte";
  
  let gm:boolean

  onMount(isGM($campaign, res => gm = res))
</script>
<a href='/notes'>Browse Tags</a>
<All />
{#if gm}
  <hr/>
  <All {gm} />
{/if}