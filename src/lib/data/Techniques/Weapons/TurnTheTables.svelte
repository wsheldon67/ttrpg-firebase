<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Turn The Tables">
  <slot slot='header' />
  <p><em>Make careful strikes to undermine your foe's advantageous position.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Knock your foe from their position to a new, disadvantageous position</li>
    <li>Inflict 1 fatigue</li>
  </ul>
  <p>If your foe was <Tip text='favored'/> or <Tip text='prepared'/> at the start of the <Tip text='exchange'/>, you inflict an additional 1 fatigue, and they lose all appropriate positive <Tip text='statuses'/>.</p>
  <p>These costs and consequences cannot be canceled or avoided by another technique.</p>
</Header>