<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import type { Data } from '$lib/data/character';
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
</script>
<Header h={1} {start} {hide} title='Slide Around the Blow'>
  <slot slot='header' />
</Header>