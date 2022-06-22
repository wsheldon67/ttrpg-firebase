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
<Header h={1} {start} {hide} title="Shield Wall">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>The group together forms a barricade.</em></p>
  <ul>
    <li>Become <Tip text='favored'/></li>
    <li>Ignore the first 2 <Tip text='fatigue'/> and 1 <Tip text='condition'/> it would mark this <Tip text='exchange'/></li>
  </ul>
  <p>Next exchange, all movement or maneuvering past the shield wall is automatically blocked.</p>
</Header>