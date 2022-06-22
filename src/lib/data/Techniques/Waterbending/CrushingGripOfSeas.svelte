<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Crushing Grip of Seas'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Fatigue bind:character={character} amt={2} />
    {/if}
    <slot />
  </div>
  <p><em>Throw a tendril of water that wraps around a foe's limb and holds it in place.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict <Tip text='impaired'/> on a foe</li>
  </ul>
  <p>Mark an additional 2 fatigue to inflict <Tip text='trapped'/> with a 2nd tendril.</p>
  <p>If the foe is already impaired, the total cost to trap them is just 2 fatigue.</p>
</Header>