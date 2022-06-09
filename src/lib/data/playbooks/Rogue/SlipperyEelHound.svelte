<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Slippery Eel-Hound'>
  <slot slot='header'/>
  <p>Use <Tip text='seize a position'/> to escape the <Tip text='scene'/>.</p>
  <ul>
    <li>Foes must mark an additional +2 <Tip text='fatigue'/> to stop you.</li>
    <li>You may bring any allies within reach.</li>
  </ul>
</Header>