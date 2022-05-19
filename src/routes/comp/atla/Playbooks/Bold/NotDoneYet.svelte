<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Not Done Yet!'>
  <p>Once per session, when you are <Tip text='taken out'/>, <Tip text='shift your balance'/> towards center to stay up for one more <Tip text='combat exchange'/>.</p>
</Header>