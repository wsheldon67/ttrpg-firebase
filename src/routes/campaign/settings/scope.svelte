<script lang='ts'>
  import type { Campaign } from "$lib/data/campaign";
  import Nations from '../../comp/Nations/index.svelte'

  export let campaign:Campaign
</script>
<style>
  img {
    width: 100%;
  }
</style>
<svelte:head><title>Choose a Scope</title></svelte:head>
<h1>Scope</h1>
<p>The scope of your game measures how much of the Four Nations you expect to explore over the course of play.</p>
<label>
  Choose a scope:
  <input bind:value={campaign.scope}/>
</label>
<Nations hide/>