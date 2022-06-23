<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Earth Armor">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Gather earth, crystal, or other available material around you to create armor.</em></p>
  {#if character}
    <label>
      Current Hold: <input type='number' bind:value={character.feature_settings.Earth_Armor} />
    </label>
  {/if}
  <p><Tip text='Hold'/> 3:</p>
  <ul>
    <li>Spend 1 hold to negate 1 <Tip text='condition'/> or 2 <Tip text='fatigue'/></li>
    <li>While you have hold, you are <Tip text='favored'/></li>
    <li>You must spend at least 1 hold whenever an incoming attack would inflict fatigue or conditions.</li>
  </ul>
</Header>