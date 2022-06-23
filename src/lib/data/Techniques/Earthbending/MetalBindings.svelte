<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Metal Bindings">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Catch an enemy's limbs in metal you control.</em></p>
  <p>They become <Tip text='impaired'/> and cannot remove the status unless they are able to metalbend or the fight ends.</p>
  <p>While they are impaired and you are <Tip text='engaged'/> with them, you are <Tip text='Favored'/>.</p>
</Header>