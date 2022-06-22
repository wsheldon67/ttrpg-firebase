<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Commit'>
  <slot slot='header' />
  <ol>
    <li><Tip text='Shift your balance'/> towards one of your principles</li>
    <li>The next time you <Tip text='live up to that principle'/>, do not mark fatigue.</li>
  </ol>
  <p>Lasts until the situation changes drastically, such as the end of a fight.</p>
</Header>