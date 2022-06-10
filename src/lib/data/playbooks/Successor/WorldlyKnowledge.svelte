<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false

  // TODO select 2nd training, 3rd background
</script>
<Header h={1} {start} {hide} title='Worldly Knowledge'>
  <slot slot='header'/>
  <p>Your upbringing expanded your horizons, skillsets, and contracts. Choose another <Tip text='training'/> and another <Tip text='background'/>.</p>
</Header>