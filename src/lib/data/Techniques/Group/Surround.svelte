<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Surround">
  <slot slot='header' />
  <p><em>The group closes around a single foe.</em></p>
  <p>Every additional attack on that foe during this <Tip text='exchange'/> inflicts an additional 1 <Tip text='fatigue'/>.</p>
  <p>Every attack made by a surrounded foe forces them to suffer 1 fatigue.</p>
</Header>