<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import { onMount } from 'svelte';
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false

  function click({detail}) {
    const {inflicted} = detail
    character.feature_settings.flame_knives += inflicted
  }
  onMount(() => {
    if (character && !character.feature_settings.flame_knives) {
      character.feature_settings.flame_knives = 0
    }
  })
</script>
<Header h={1} {start} {hide} title="Flame Knives">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} on:click={click} />
      <Fatigue bind:character={character} on:click={click} amt={2}/>
      <Fatigue bind:character={character} on:click={click} amt={3}/>
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Flames: <input type='number' bind:value={character.feature_settings.flame_knives} />
    </label>
  {/if}
  <p>Mark up to 3 <Tip text='fatigue'/> and hold the same number of <strong>flames</strong>.</p>
  <ul>
    <li>Lose 1 flame at the end of each <Tip text='exchange'/> after this one.</li>
  </ul>
  <p>When you inflict fatigue or <Tip text='conditions'/> on a foe, inflict an additional 1 fatigue for each remaining flame.</p>
</Header>