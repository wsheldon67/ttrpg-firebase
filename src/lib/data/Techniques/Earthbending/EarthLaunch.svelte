<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte';
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Earth Launch">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Throw yourself into the air with a massive burst of force.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Become <Tip text='favored'/></li>
  </ul>
  <p>You disengage all foes who can't reach you high in the air, but you come back down into their midst at the end of the <Tip text='exchange'/>.</p>
</Header>