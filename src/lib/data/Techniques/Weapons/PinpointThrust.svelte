<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Pinpoint Thrust">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Using a thrusting or stabbing weapon, go straight for the target with precision and accuracy.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue and <Tip text='impaired'/> on your foe</li>
  </ul>
  <p>You may mark an additional 1 fatigue to move yourself to a new position within reach; any foes <Tip text='engaged'/> with you may mark 1 fatigue to block this movement.</p>
</Header>