<script lang='ts'>
  import type { NPC } from "$lib/data/npc";
  import { techniques } from '$lib/data/techniques';
  import Basic from '$lib/data/techniques/Basic';
  import Tip from "$lib/c/Tip.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { plural } from "$lib/pretty";
  import Tags from '$lib/data/techniques/Tags.svelte';
  
  export let npc:NPC
  export let start:number = 1
  $: npc_techniques = techniques.filter(el => npc.techniques.includes(el.name))
</script>
<p>Choose an <Tip text='approach'/>, you can use <Tooltip tip='Your balance + 1'>{plural(npc.balance + 1, 'technique')}</Tooltip> from that approach.</p>
{#each npc_techniques as technique}
  <div class='cont'>
    <svelte:component this={technique.component} start={start+1} bind:character={npc} hide/>
    <div class='row'>
      <Tags {technique} />
    </div>
  </div>
{/each}
{#each Basic as technique}
<div class='cont'>
  <svelte:component this={technique.component} start={start+1} bind:character={npc} hide/>
  <div class='row'>
    <Tags {technique}/>
  </div>
</div>
{/each}
<style>
  .row > :global(div) {
    width: max-content;
    height: 1.6rem;
  }
  .row :global(.cont) {
    height: 1rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>