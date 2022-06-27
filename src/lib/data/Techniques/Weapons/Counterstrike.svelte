<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import { plural } from '$lib/pretty';

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Counterstrike">
  <slot slot='header' />
  <p><em>Using impeccable timing, read your foe's movement and lash out with blinding speed.</em></p>
  <p>Execute a <Tip text='strike'/> as if you had marked 1 <Tip text='fatigue'/> against an engaged foe who chose <Tip text='advance and attack'/> as their approach.</p>
  <ul><li>You cannot use this technique if you have any negative <Tip text='statuses'/>.</li></ul>
  {#if character}
    (You currently have {plural(character.negative_statuses.filter(el => el.applied).length, 'negative status', 'negative statuses')}.)
  {/if}
</Header>