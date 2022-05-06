<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Ready'>
  <p>Mark 1 <Tip text='fatigue'/> to assign a <Tip text='fictionally'/> appropriate <Tip text='status'/> to nearby characters or yourself.</p>
  //TODO finish techniques
</Header>