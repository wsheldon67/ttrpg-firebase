<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Swarm">
  <slot slot='header' />
  <p><em>The group throws itself upon a foe with no heed to its own safety.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue on a single target</li>
  </ul>
  <p>This technique may be chosen multiple times. Each time it is chosen after the first, it inflicts an additional 1 fatigue.</p>
</Header>