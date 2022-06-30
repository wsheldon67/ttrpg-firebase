<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Pinpoint Flaws">
  <slot slot='header' />
  <p><em>Identify weak points in your environment.</em></p>
  <ul>
    <li>Name a <Tip text='status'/> you wish to inflict on a foe next <Tip text='exchange'/></li>
    <li>The GM will tell you what you need to break in your environment to inflict that status</li>
    <li>Next exchange, you may use <Tip text='Smash'/> in addition to any other techniques you use, no matter what <Tip text='approach'/> you choose.</li>
  </ul>
</Header>