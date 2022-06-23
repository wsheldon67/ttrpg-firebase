<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Thick Mud">
  <slot slot='header' />
  <p><em>Transform the earth and stone around you into sticky, sucking mud.</em></p>
  <ul>
    <li>Any foes <Tip text='engaged'/> with and acting against you in this <Tip text='exchange'/> become stuck and <Tip text='impaired'/>.</li>
    <li>You may use <Tip text='Strike'/> against each stuck foe in the next exchange, in addition to your normal techniques, and regardless of your chosen <Tip text='approach'/>.</li>
  </ul>
</Header>