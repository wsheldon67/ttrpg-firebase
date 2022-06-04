<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Retaliate'>
  <p>Each time a foe inflicts <Tip text='fatigue'/>, a <Tip text='condition'/>, or <Tip text='shifts your balance'/> in this exchange, inflict 1 fatigue on them.</p>
</Header>