<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Take Cover'>
  <slot slot='header' />
  <p><em>Swerve and maneuver into cover.</em></p>
  <p>The first attack on you this <Tip text='exchange'/> strikes your cover, damaging or destroying it, but leaving you unharmed.</p>
</Header>