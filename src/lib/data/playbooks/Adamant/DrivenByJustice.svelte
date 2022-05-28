<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Driven by Justice'>
  <p>Take +1 to <Tip text='Passion'/> (max +3).</p>
</Header>