<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Rock Column">
  <slot slot='header' />
  <p>Pin a foe with a column of earth. Inflict <Tip text='impaired'/> on a single combatant.</p>
  <ul>
    <li>If they are already impaired, inflict <Tip text='trapped'/></li>
    <li>If they are already trapped, inflict <Tip text='doomed'/></li>
  </ul>
</Header>