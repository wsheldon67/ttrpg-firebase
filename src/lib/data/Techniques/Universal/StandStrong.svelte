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
<Header h={1} {start} {hide} title='Stand Strong'>
  <slot slot='header' />
  <p>Plant your feet and prepare yourself for incoming blows.</p>
  <ul>
    <li>Become <Tip text='Prepared'/>.</li>
    <li>Automatically block or avoid any negative <Tip text='statuses'/> inflicted on you this exchange.</li>
  </ul>
</Header>