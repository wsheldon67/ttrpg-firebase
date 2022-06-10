<script lang='ts'>
import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte'
import Status from '$lib/c/Status.svelte';
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import type { Move } from '../moves';
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Trusty Talisman">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
      <Status bind:character={character} status='Impaired'/>
    {/if}
    <slot />
  </div>
  {#if character}
    <label>
      Your weapon, tool, or item:
      <input bind:value={character.feature_settings.TrustyTalisman} />
    </label>
  {/if}
  <p>Use your specific weapon, tool, or item to <Tip text='rely on your skills and training'/>.</p>
  <ul>
    <li>Roll with Harmony instead of Focus.</li>
    <li>If you miss, the item is damaged.</li>
    <li>If the item is damaged again, it is destroyed.</li>
    <li>You are <Tip text='impaired'/> without it until someone helps you overcome the loss. Choose a new move to replace this one when you finally move on.</li>
  </ul>
</Header>