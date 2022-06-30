<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false

  let gears = 1
  $: base = Number(gears)
  $: three = base >= 3 ? 2 : 0
  $: total = base + three + 2
</script>
<Header h={1} {start} {hide} title="Full Power Attack">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Impaired' />
    {/if}
    <slot />
  </div>
  <p><em>Discharge your batteries, release the high-tension coils, and otherwise unleash the full charge of your equipment!</em></p>
  <ul>
    <li>Become <Tip text='impaired'/></li>
    <li>Inflict 2 <Tip text='fatigue'/></li>
  </ul>
  <p>Spend <strong>gears</strong> to inflict additional fatigue.</p>
  <ul>
    <li>1 gear = 1 additional fatigue</li>
    <li>3+ gears = 2 fatigue in addition to the 1 per gear</li>
  </ul>
  {#if character.feature_settings.gears}
    <label>
      Current Gears:
      <input type='number' bind:value={character.feature_settings.gears} />
    </label>
  {/if}
  <div class='row'>
    <label>Gears Spent <input type='number' bind:value={gears}/></label>
    <p>Total Fatigue Dealt: {total}</p>
  </div>
  <p>You cannot earn gears for the rest of this <Tip text='scene'/> - your equipment is too damaged, depleted, or otherwise used up.</p>
</Header>
<style>
  .row {
    display: flex;
    flex-direction: row;
  }
</style>