<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Air Scooter">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Summon a ball or ring of air under yourself.</em></p>
  <ul>
    <li>While riding it, you are <Tip text='favored'/>.</li>
    <li>You can sacrifice your air scooter to avoid marking <Tip text='fatigue'/> or <Tip text='conditions'/> when you are struck by an attack.</li>
  </ul>
</Header>