<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="The Strength of Your Heart">
  <div slot='header'>
    <slot />
  </div>
  <p>When you <Tip text='seize a position'/>, foes must mark 2 <Tip text='fatigue'/> to block your movement.</p>
</Header>