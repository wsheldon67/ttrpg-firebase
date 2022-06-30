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
<Header h={1} {start} {hide} title="Rebuild">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Gears bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Current Gears:
      <input type='number' bind:value={character.feature_settings.gears} />
    </label>
  {/if}
  <p><em>Using your technological know-how, you improve the situation by quickly tuning, reparing, and adjusting your available equipment.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Clear a <Tip text='condition'/></li>
    <li>Gain 3 <strong>gears</strong></li>
  </ul>
  <p>Spend gears instead of fatigue on:</p>
  <ul class='or'>
    <li>Technology techniques</li>
    <li>Basic techniques using technology training</li>
  </ul>
</Header>