<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Rapid Assessment'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p>Quickly take in your situation far faster than normal.</p>
  <ul>
    <li>Ask one question about the situation at hand.</li>
    <li>Become <Tip text='prepared'/> to act on the answer.</li>
    <li>You may call out your plan to an ally to make them prepared as well.</li>
  </ul>
</Header>