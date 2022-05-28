<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Furrowed Brow'>
  <p>Take +1 <Tip text='Focus'/> (max+3).</p>
</Header>