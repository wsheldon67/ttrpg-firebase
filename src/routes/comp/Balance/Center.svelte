<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Center' is_page_title>
  <p>The point to which your balance returns when you have <Tooltip tip='Typically more than a single night'>time</Tooltip>, or a chance to rest and reflect.</p>
</Header>