<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Focused Fire">
  <slot slot='header' />
  <p><em>The group pours out all of its attacks simultaneously, in synchronized fashion, against the same target.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue and a <Tip text='condition'/></li>
  </ul>
  <p>If the group was <Tip text='prepared'/> for this attack, inflict an additional 2 fatigue or another condition.</p>
</Header>