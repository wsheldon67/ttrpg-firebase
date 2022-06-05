<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Basic from '$lib/data/techniques/Basic/index.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Basic {start} {hide}/>