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
<Header h={1} {start} {hide} title="Test Defenses">
  <slot slot='header' />
  <p><em>The group slowly probes the defenses of a foe, one or two members attacking individually to determine the foe's abilities.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/>, <Tip text='favored'/>, and <Tip text='Inspired'/></li>
    <li>Learn the balance <Tip text='principle'/> of your target</li>
  </ul>
  <p>The chosen foe may immediately use <Tip text='Strike'/> on the group in turn.</p>
</Header>