<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Tag Team'>
  <slot slot='header' />
  <p>Work with an ally against the same foe; choose an engaged foe and an ally - double any <Tip text='fatigue'/>, <Tip text='conditions'/>, or <Tip text='balance shifts'/> that ally inflicts upon the foe.</p>
</Header>