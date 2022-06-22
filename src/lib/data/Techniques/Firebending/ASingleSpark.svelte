<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="A Single Spark">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Unleash your emotions into the flames around you.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li><Tip text='Hold'/> 1 for each <Tip text='condition'/> you have marked. {character ? `You have ${character.conditions.filter(el => el.applied).length} conditions marked.`: ''}</li>
  </ul>
  <p>Spend your hold 1-for-1 in the next <Tip text='exchange'/> to:</p>
  <ul>
    <li>Pay the costs of techniques as if it was fatigue.</li>
    <li>Inflict <Tip text='doomed'/> on a foe you target with firebending.</li>
    <li>Use <Tip text='Seize a Position' path='Techniques/Seize A Position'/>, no matter your <Tip text='approach'/>, in addition to your other techniques.</li>
  </ul>
</Header>