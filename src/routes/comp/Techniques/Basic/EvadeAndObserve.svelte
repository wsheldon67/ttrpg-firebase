<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../atla/_Tip.svelte'
import BolsterOrHinder from '../BolsterOrHinder.svelte'
import Commit from '../Commit.svelte'
import TestBalance from '../TestBalance.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Header h={1} {start} {hide} title='Evade and Observe'>
  <TestBalance start={low} hide/>
  <BolsterOrHinder start={low} hide/>
  <Commit start={low} hide/>
</Header>