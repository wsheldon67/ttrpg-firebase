<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let character:Data|NPC = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Attend To Commands">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Impaired' remove/>
      <Status bind:character={character} status='Inspired' />
    {/if}
    <slot />
  </div>
  <p><em>A leading voice in the group takes a moment to organize it effectively.</em></p>
  <ul>
    <li>Clear <Tip text='impaired'/></li>
    <li>Become <Tip text='inspired'/></li>
    <li>Inflict 1 additional <Tip text='fatigue'/> on all attacks made next <Tip text='exchange'/></li>
  </ul>
</Header>