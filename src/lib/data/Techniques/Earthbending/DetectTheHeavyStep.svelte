<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Detect The Heavy Step">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>Use seismic sense to detect the instant an enemy is about to move against you.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/></li>
  </ul>
  <p>At any time during this <Tip text='exchange'/>, you may lose your Prepared status and mark 1 <Tip text='fatigue'/> to interrupt an enemy as they use a technique.</p>
  <ul>
    <li>They must mark an additional 3 fatigue, or you disrupt their attempt to act, cancelling the technique.</li>
  </ul>
</Header>