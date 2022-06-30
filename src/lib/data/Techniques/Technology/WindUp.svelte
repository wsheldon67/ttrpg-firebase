<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import Gears from './_Gears.svelte'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Wind Up">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Gears bind:character={character} />
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Current Gears:
      <input type='number' bind:value={character.feature_settings.gears} />
    </label>
  {/if}
  <p><em>Wind up a technological device to build tension and charge!</em></p>
  <ul>
    <li>Gain 1 <strong>gear</strong></li>
    <li>Become <Tip text='favored'/></li>
  </ul>
  <p>Mark up to 2 <Tip text='fatigue'/>:</p>
  <ul>
    <li>Hold 2 additional gears for each fatigue you mark</li>
  </ul>
  <p>Spend gears instead of fatigue on:</p>
  <ul class='or'>
    <li>Technology techniques</li>
    <li><Tip text='Basic techniques'/> using technology training.</li>
  </ul>
</Header>