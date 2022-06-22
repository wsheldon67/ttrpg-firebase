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
<Header h={1} {start} {hide} title="Coordination">
  <slot slot='header' />
  <p><em>The group sets itself up to launch a concerted, skilled attack upon its targets next exchange.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/> and <Tip text='favored'/></li>
    <li>Clear 2 <Tip text='fatigue'/> or a <Tip text='condition'/></li>
  </ul>
</Header>