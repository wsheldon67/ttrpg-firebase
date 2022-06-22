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
<Header h={1} {start} {hide} title="Jet Stepping">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>Advance to a higher position.</em></p>
  <ul>
    <li>Become <Tip text='favored'/> and <Tip text='prepared'/> for the next <Tip text='exchange'/></li>
  </ul>
  <p>Any <Tip text='engaged'/> foe can mark 2 <Tip text='fatigue'/> to block this technique.</p>
</Header>