<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
import Forward from './Forward.svelte'
import Hold from './Hold.svelte'
  import Ongoing from './Ongoing.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Bonuses'>
  <Ongoing start={start+1} />
  <Hold start={start+1} />
  <Forward start={start+1} />
</Header>