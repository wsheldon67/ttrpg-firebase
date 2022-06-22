<script lang='ts'>
  import type { NPC } from "$lib/data/npc";
  import { beforeUpdate, createEventDispatcher } from 'svelte';
  import { beforeNavigate } from '$app/navigation';
  import Header from "$lib/c/Header.svelte";
  import Scale from "$lib/c/Scale.svelte";
  import { techniques } from '$lib/data/techniques';
  import Basic from '$lib/data/techniques/Basic';
  import Technique from "$lib/data/techniques/Technique.svelte";
  import Tip from "$lib/c/Tip.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import Notes from "./notes.svelte";
  import { quick } from "$lib/data/quick_tips";
  const dispatch = createEventDispatcher();
  import { plural } from "$lib/pretty";
  import Tags from '$lib/data/techniques/Tags.svelte';

  export let npc:NPC
  export let start:number = 1
  export let hide:boolean = false

  $: npc_techniques = techniques.filter(el => npc.techniques.includes(el.name))

  // on updates, send to server
  let timeout_id
  beforeUpdate(async()=>{
    if (timeout_id) {clearTimeout(timeout_id)}
    // wait 200ms to see if there's any sequential updates
    timeout_id = setTimeout(()=>{
      dispatch('update',npc)
      timeout_id = undefined
    }, 2000)
  })
  beforeNavigate(() => {
    dispatch('update', npc)
  })
</script>
<Header h={1} {start} {hide} title={`${npc.name} - ${npc.importance} NPC`} is_page_title>
  <p>{npc.name} {npc.feature}</p>
  <p>Drive: {npc.drive}</p>
  <p>Hopes: {npc.hopes}</p>
  <p>Fears: {npc.fears}</p>
  <p>Description:</p>
  <p>{npc.notes}</p>
</Header>
<Header h={1} {start} title='Mechanics' hide>
  <p>Principle: {npc.principle} (+{npc.balance})</p>
  <Scale bind:value={npc.balance} min={0} max={npc.max_balance} />
  <p>Fatigue: {npc.fatigue}/{npc.max_fatigue}</p>
  <Scale bind:value={npc.fatigue} min={0} max={npc.max_fatigue} reverse/>
  <p>Conditions</p>
  <div class='conditions'>
    {#each npc.conditions as {name, applied}}
      <label>
        <input type='checkbox' bind:checked={applied} />
        {name}
      </label>
    {/each}
  </div>
  <div class='status_cont'>
    <p>Positive Statuses</p>
    <div class='status'>
      {#each npc.positive_statuses as {name, applied}}
        <label>
          <input type='checkbox' bind:checked={applied} />
          <Tooltip tip={quick[name.toLowerCase()]}>{name}</Tooltip>
        </label>
      {/each}
    </div>
    <p>Negative Statuses</p>
    <div class='status'>
      {#each npc.negative_statuses as {name, applied}}
        <label>
          <input type='checkbox' bind:checked={applied} />
          <Tooltip tip={quick[name.toLowerCase()]}>{name}</Tooltip>
        </label>
      {/each}
    </div>
  </div>
</Header>
<Header h={1} {start} title='Techniques' hide>
  <p>Choose an <Tip text='approach'/>, you can use <Tooltip tip='Your balance + 1'>{plural(npc.balance + 1, 'technique')}</Tooltip> from that approach.</p>
  {#each npc_techniques as technique}
    <div class='cont'>
      <svelte:component this={technique.component} start={start+1} bind:npc={npc} hide/>
      <div class='row'>
        <Tags {technique} />
      </div>
    </div>
  {/each}
  {#each Basic as technique}
  <div class='cont'>
    <svelte:component this={technique.component} start={start+1} bind:npc={npc} hide/>
    <div class='row'>
      <Tags {technique}/>
    </div>
  </div>
  {/each}
</Header>
<Header h={1} {start} title='Notes'>
  <Notes name={npc.name} />
</Header>
<style>
  .conditions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .status {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
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