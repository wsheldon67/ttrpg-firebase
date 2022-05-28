<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../atla/_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Retaliate'>
  <p>Each time a foe inflicts <Tip text='fatigue'/>, a <Tip text='condition'/>, or <Tip text='shifts your balance'/> in this exchange, inflict 1 fatigue on them.</p>
</Header>