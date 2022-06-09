<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Casing the Joint'>
  <slot slot='header'/>
  <p><Tip text='Assess a situation'/>, but add these questions to the list:</p>
  <ul>
    <li>What here is most valuable or interesting to me?</li>
    <li>Who or what is most vulnerable to me?</li>
    <li>Who here is in control / wealthiest / has the most power?</li>
  </ul>
  <p>You may always ask one extra question from these, even on a miss.</p>
</Header>