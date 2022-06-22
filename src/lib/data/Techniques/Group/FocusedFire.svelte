<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let character:Data|NPC = undefined
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Focused Fire">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>The group pours out all of its attacks simultaneously, in synchronized fashion, against the same target.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue and a <Tip text='condition'/></li>
  </ul>
  <p>If the group was <Tip text='prepared'/> for this attack{character && character.positive_statuses.find(el => el.name === 'Prepared').applied ? ' (they were)' : ''}, inflict an additional 2 fatigue or another condition.</p>
</Header>