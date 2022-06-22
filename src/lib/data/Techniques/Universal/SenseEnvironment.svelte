<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Sense Environment'>
  <slot slot='header' />
  <p>Look for opportunities to usefully reshape your environment.</p>
  <p>The next time you <Tip text='advance and attack'/> or <Tip text='defend and maneuver'/>:</p>
  <ul>
    <li>You may use <Tip text='Smash' path='Techniques/Smash' /> or <Tip text='Ready' path='Techniques/Ready'/> in addition to any other techniques you use, even on a <Tip text='miss'/>.</li>
    <li>When you use these techniques this way, do not mark <Tip text='fatigue'/>.</li>
  </ul>
</Header>