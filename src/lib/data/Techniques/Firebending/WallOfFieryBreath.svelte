<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Wall Of Fiery Breath">
  <slot slot='header' />
  <p><em>Breathe a gout of flame that keeps foes back as you maneuver away from them.</em></p>
  <ul>
    <li>Mark 1 <Tip text='condition'/></li>
    <li>Move to a new position</li>
    <li>Foes must disengage, or push through the flame and take 4 <Tip text='fatigue'/></li>
  </ul>
</Header>