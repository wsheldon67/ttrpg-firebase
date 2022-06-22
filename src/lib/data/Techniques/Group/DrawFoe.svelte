<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Draw Foe">
  <slot slot='header' />
  <p><em>The group misleads a foe into overextending themselves.</em></p>
  <ul>
    <li>Target an <Tip text='engaged'/> foe who chose the <Tip text='advance and attack'/> approach</li>
  </ul>
  <p>That foe must mark 1 <Tip text='fatigue'/>, become <Tip text='impaired'/>, and is moved out of reach of allies.</p>
</Header>