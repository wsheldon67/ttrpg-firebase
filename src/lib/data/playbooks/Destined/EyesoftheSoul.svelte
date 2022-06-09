<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Eyes of the Soul'>
  <slot slot='header'/>
  <p><Tip text='Assess a situation'/>. You can ask one of these extra questions, even on a miss:</p>
  <ul>
    <li>Who or what here has been touched by spirits?</li>
    <li>How can I bring about peace here?</li>
  </ul>
</Header>