<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Things In Common">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Inspired' />
    {/if}
    <slot />
  </div>
  <p><Tip text='Guide and comfort'/> someone who shares a <Tip text='training'/> or <Tip text='background'/> with you by talking about what you have in common.</p>
  <ul>
    <li>On a hit, you become <Tip text='Inspired'/>.</li>
    <li>If they embrace your guidance and comfort, they become inspired as well.</li>
  </ul>
</Header>