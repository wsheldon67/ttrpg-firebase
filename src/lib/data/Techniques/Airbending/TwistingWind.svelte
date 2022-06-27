<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Twisting Wind">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={-1} />
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Momentum:
      <input type='number' bind:value={character.feature_settings.TwistingWind} />
    </label>
  {/if}
  <p><em>Effortlessly flow around blows like the wind itself.</em></p>
  <p>For each foe <Tip text='engaged'/> with you who chose <Tip text='advance and attack'/>:</p>
  <ul>
    <li>Clear 1 <Tip text='fatigue'/></li>
    <li><Tip text='Hold'/> 1 <strong>momentum</strong></li>
  </ul>
  <p>If you advance and attack next <Tip text='exchange'/>, you may spend your momentum instead of fatigue.</p>
</Header>