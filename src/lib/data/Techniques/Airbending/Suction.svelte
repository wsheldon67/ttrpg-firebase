<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Suction">
  <slot slot='header' />
  <p><em>Snatch a small object off the ground or from a foe's hand with a sucking wind.</em></p>
  <p>The object snaps to your hand unless someone marks 2 <Tip text='fatigue'/> to hold it or block its movement.</p>
</Header>