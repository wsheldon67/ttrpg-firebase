<script lang='ts'>
  import type { NPC } from "$lib/data/npc";
  import Scale from "$lib/c/Scale.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { quick } from "$lib/data/quick_tips";
  
  export let npc:NPC
</script>
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
</style>