<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Suck It Up'>
  <slot slot='header' />
  <p><em>Focus and absorb a blow, readying yourself to act immediately after.</em></p>
  <p>For each attack that inflicts <Tip text='fatigue'/>, <Tip text='conditions'/>, or <Tip text='balance shifts'/> on you this <Tip text='exchange'/>:</p>
  <ul>
    <li>Choose one additional technique next next exchange, even if you roll a miss on the <Tip text='stance'/> move.</li>
  </ul>
</Header>