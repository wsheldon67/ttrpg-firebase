<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Forceful Blow'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>Swing at an emeny with all your might, sending them flying.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue or one <Tip text='condition'/> on your target</li>
    <li>Push them to a new position unless they mark 2 fatigue.</li>
  </ul>
</Header>