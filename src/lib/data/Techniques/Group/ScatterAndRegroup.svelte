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
<Header h={1} {start} {hide} title="Scatter And Regroup">
  <slot slot='header' />
  <p><em>The group splits apart and reforms nearby.</em></p>
  <ul>
    <li>Clear 1 <Tip text='condition'/></li>
    <li>Any foe <Tip text='engaged'/> with the group is disengaged</li>
  </ul>
  <p>The group can then advance and engage with foes as it chooses; any foes the group engages with are <Tip text='impaired'/>.</p>
</Header>