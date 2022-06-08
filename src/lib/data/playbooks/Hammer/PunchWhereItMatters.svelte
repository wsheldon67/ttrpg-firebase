<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Punch Where It Matters'>
  <div slot='header'>
    <slot />
  </div>
  <p>When you <Tip text='assess a situation'/>, you can always ask "Who or what here is most vulnerable to me?", even on a miss. Remember to take +1 <Tip text='ongoing'/> to act in accordance with the answer.</p>
</Header>