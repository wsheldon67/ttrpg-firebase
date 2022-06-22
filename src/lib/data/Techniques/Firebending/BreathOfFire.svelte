<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Breath Of Fire">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Breathe fire in a massive gout.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/>.</li>
    <li>Set alight as much or as little of your surroundings as you choose.</li>
  </ul>
  <p>Foes within reach must either:</p>
  <ul>
    <li>Retreat, becoming <Tip text='impaired'/></li>
    <li>Or suffer 2 fatigue and become <Tip text='doomed'/> as they catch fire.</li>
  </ul>
</Header>