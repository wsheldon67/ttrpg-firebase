<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Break'>
  <p>Target a foe's vulnerable equipment, rendering it useless or broken.</p>
  <ul>
    <li>Possibly inflict or overcome a <Tip text='fictionally'/> appropriate <Tip text='status'/>.</li>
  </ul>
</Header>