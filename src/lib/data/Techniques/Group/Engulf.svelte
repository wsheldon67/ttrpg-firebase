<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'

  export let character:Data|NPC = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Engulf">
  <slot slot='header' />
  <p><em>The whole group shifts forward en masse, engulfing their target and engaging them.</em></p>
  <ul>
    <li>An engulfed target becomes <Tip text='impaired'/> and cannot escape or disengage this <Tip text='exchange'/></li>
    <li>The group automatically uses <Tip text='Strike'/> against each impaired foe within reach.</li>
  </ul>
</Header>