<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Attack Weakness'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>Strike an enemy at a weak point where they've already been injured.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/>.</li>
    <li>Target an engaged, <Tip text='impaired'/> enemy in reach.</li>
  </ul>
  <p>They suffer fatigue equal to however many <Tip text='conditions'/> they already have marked.</p>
</Header>