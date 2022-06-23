<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Eat Dirt">
  <slot slot='header' />
  <p><em>Even the smallest pebble can cause a gator-phant to stumble. Cause a foe to loose their footing.</em></p>
  <p>Your target is <Tip text='impaired'/> and unable to choose <Tip text='defend and maneuver'/> in the next exchange.</p>
</Header>