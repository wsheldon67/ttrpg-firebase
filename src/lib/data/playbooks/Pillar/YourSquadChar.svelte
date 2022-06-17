<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import type { Data } from "$lib/data/character";
import { onMount } from "svelte";

  export let character:Data
  export let traits:string[]
  export let values:string[]
  export let away:string[]

  onMount(() => {
    console.log('mount')
    if (!character.feature_settings.Traits) {
      character.feature_settings.Traits = traits.map((trait) => {
        return {name: trait, checked: false}
      })
      character.feature_settings.Values = new Array(2)
    }
  })
</script>
{#if character.feature_settings.Traits}
<label>
  <input bind:value={character.feature_settings.Home} />
  is where my squad calls home.
</label>
<p>The most <Tooltip tip='Choose up to 3'>well known traits</Tooltip> of my squad are:</p>
{#each character.feature_settings.Traits as {name, checked}}
  <label>
    <input type='checkbox' bind:checked={checked} />
    {name}
  </label>
{/each}
<div class='values'>
<p>My squad values</p>
  {#each character.feature_settings.Values as text, index}
    <select bind:value={text}>
      {#each values as value}
        <option>{value}</option>
      {/each}
    </select>
    {#if index === 0}
      <p>and</p>
    {/if}
  {/each}
</div>
<p>Despite being the leader, I chose to travel with my new companions for the time being.</p>
<label>
  My team is
  <select bind:value={character.feature_settings.Away}>
    {#each away as text}
      <option>{text}</option>
    {/each}
  </select>
</label>
{/if}
<style>
  .values {
    display: flex;
    flex-direction: row;
  }
  p {
    margin-top: .75em;
  }
  select {
    height: 1.4em;
    margin-top: .75em;
  }
</style>