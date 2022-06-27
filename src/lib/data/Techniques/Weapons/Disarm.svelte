<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Disarm">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
    {/if}
    <slot />
  </div>
  <p><em>Target your foe's ability to fight by breaking, removing, or limiting a particular style.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
    <li>Name any advance <Tip text='advance and attack'/> technique your foe has</li>
    <li>They are unable to use that technique for the remainder of this encounter.</li>
  </ul>
</Header>