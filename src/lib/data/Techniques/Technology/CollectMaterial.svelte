<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Collect Material">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Current Gears:
      <input type='number' bind:value={character.feature_settings.gears} />
    </label>
  {/if}
  <p>Scrounge up bits and bobs from the area around you that you can use to your advantage.</p>
  <ul>
    <li>Take 3 gears</li>
    <li>Become <Tip text='prepared'/></li>
  </ul>
  <p>Spend gears 1-for-1 instead of <Tip text='fatigue'/> on <Tip text='technology techniques' path='Techniques/Technology'/> or <Tip text='basic techniques'/> using technology training.</p>
</Header>