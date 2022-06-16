<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Charge'>
  <slot slot='header' />
  <p>Advance straight at an enemy to strike them full force.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/>.</li>
    <li>Close the distance and <Tip text='engage'/> with an enemy you aren't currently engaged with.</li>
    <li>Inflict 1 <Tip text='condition'/> or 2 fatigue (their choice).</li>
    <li>Become <Tip text='favored'/> for the next <Tip text='exchange'/>.</li>
  </ul>
</Header>