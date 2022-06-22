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
<Header h={1} {start} {hide} title='Strike'>
  <slot slot='header' />
  <p>Mark 0 <Tip text='fatigue'/>, they choose one:</p>
  <ul>
    <li>Mark 2 fatigue</li>
    <li>Mark a <Tip text='condition'/></li>
    <li><Tip text='shift their balance'/> away from center</li>
  </ul>
  <p>Mark 1 fatigue, you choose one:</p>
  <ul>
    <li>They mark 2 fatigue</li>
    <li>They mark a condition</li>
  </ul>
</Header>