<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Breath Of Ice'>
  <slot slot='header' />
  <p><em>Become ready to breathe shivering cold upon any foe who gets close to you.</em></p>
  <p>Any foe <Tip text='engaged'/> with you at any point in this <Tip text='exchange'/> becomes <Tip text='impaired'/> until they clear the ice from their limbs.</p>
</Header>