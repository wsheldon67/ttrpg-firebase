<script lang='ts'>
  import { campaign } from '$lib/campaign'
  import { isGM } from '$lib/display_name';
  import { onMount } from 'svelte'

  let gm:boolean
  onMount(isGM($campaign, res => gm = res))
</script>
<style>
  a {
    background-color: var(--b3);
    padding: .25em .5em;
    border-bottom: 1px solid var(--b6);
  }
  div {
    display: flex;
    flex-direction: column;
  }
</style>
<div>
  <a href='/notes/all'>Notes</a>
  <!--a href='/time/change'>Adjust Time</a-->
  <a href='/comp'>Compendium</a>
  <a href='/character'>Characters</a>
  <a href='/campaign'>Campaigns</a>
  <!--a href='/scriptwrite'>Script Writer</a-->
  {#if gm}
    <a href='/admin/characters'>View All Characters</a>
    <a href='/npc'>NPCs</a>
  {/if}
  <a href='/auth/login'>Log Off</a>
</div>
