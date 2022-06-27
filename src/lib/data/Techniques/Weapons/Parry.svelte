<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Parry">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Stop a foe's attack before it connects.</em></p>
  <p>Choose a foe who used <Tip text='advance and attack'/> this <Tip text='exchange'/>.</p>
  <ul>
    <li>During the advance and attack approach, mark <Tip text='fatigue'/> 1-for-1 to cancel an attack they use against you after they pay the costs.</li>
  </ul>
</Header>