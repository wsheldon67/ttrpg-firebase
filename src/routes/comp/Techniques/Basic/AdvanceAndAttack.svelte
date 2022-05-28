<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
import Pressure from '../Pressure.svelte'
import Smash from '../Smash.svelte'
import Strike from '../Strike.svelte'

  export let start: number = 1
  export let hide: boolean = false

  let low = start+1
</script>
<Header h={1} {start} {hide} title='Advance and Attack'>
  <Strike start={low} hide/>
  <Pressure start={low} hide/>
  <Smash start={low} hide/>
</Header>