<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Basic from './Basic/index.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Basic {start} {hide}/>