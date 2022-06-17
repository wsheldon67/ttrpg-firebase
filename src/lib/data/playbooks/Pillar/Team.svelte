<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { onMount } from "svelte";

  export let character:Data

  onMount(() => {
    if (!character.feature_settings.Leadership) {
      character.feature_settings.Leadership = new Array(2)
      character.feature_settings.Support = new Array(2)
      character.feature_settings.Team = 0
    }
  })

  const leadership = [
    {style: `Firm`, earn: `you openly call on a companion to live up to their principle.`},
    {style: `Inspiring`, earn: `you live up to your principle and roll a hit.`},
    {style: `Diplomatic`, earn: `you plead with an NPC for help and roll a 10+.`},
    {style: `Empathetic`, earn: `you guide and comfort a companion and they open up to you.`},
    {style: `Guidance`, earn: `you assess a situation and give a companion instructions based on the answers.`},
    {style: `Indomitable`, earn: `you roll a hit when you resist shifting your balance or deny a callout.`}
  ]
  const support = [
    {style: `Comforting`, earn: `you spend time one-on-one in a quiet moment with a companion to clear a condition from them.`},
    {style: `Invigorating`, earn: `you rally a companion to action in a tense moment to clear 2 fatigue from them.`},
    {style: `Defending`, earn: `you are within reach of a companion in combat to clear a negative status from them.`},
    {style: `Bolstering`, earn: `you help another companion to give them a +1 to their roll, after the roll.`},
    {style: `Encouraging`, earn: `you openly endorse a friend living up to their principle to shift their balance toward that principle.`},
    {style: `Trusting`, earn: `you openly endorse a friend resisting to shift their balance to give them +2, after the roll.`}
  ]
</script>
<label>
  Current Team:
  <button class='bad' on:click={()=>{character.feature_settings.Team--}}>-</button>
  <input bind:value={character.feature_settings.Team} type='number'/>
  <button class='good' on:click={()=>{character.feature_settings.Team++}}>+</button>
</label>

{#if character.feature_settings.Leadership}
  {#each character.feature_settings.Leadership as selected}
  <div>
    <select bind:value={selected}>
      {#each leadership as {style}}
        <option>{style}</option>
      {/each}
    </select>
    <span>Earn 1 <strong>team</strong> when {leadership.find(el => el.style === selected)?.earn || ''}</span>
  </div>
  {/each}
{/if}
{#if character.feature_settings.Support}
  {#each character.feature_settings.Support as selected}
  <div>
    <select bind:value={selected}>
      {#each support as {style}}
        <option>{style}</option>
      {/each}
    </select>
    <span>Spend 1 <strong>team</strong> when {support.find(el => el.style === selected)?.earn || ''}</span>
  </div>
  {/each}
{/if}
<style>
  .good {
    background-color: var(--good);
  }
  .bad {
    background-color: var(--bad);
  }
  select {
    font-weight: bold;
  }
</style>