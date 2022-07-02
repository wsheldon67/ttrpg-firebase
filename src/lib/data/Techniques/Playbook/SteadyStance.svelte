<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte';
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Steady Stance'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Empowered' />
    {/if}
    <slot />
  </div>
  <p><em>Assume a strong, steady stance.</em></p>
  <ul>
    <li>Any foe engaged with you who chose to <Tip text='advance and attack'/> this <Tip text='exchange'/> must mark 1 <Tip text='fatigue'/></li>
    <li>Negate the first <Tip text='condition'/> or negative <Tip text='status'/> inflicted on you in this exchange.</li>
  </ul>
  <p>If no conditions or negative statuses were inflicted on you in this exchange, become <Tip text='empowered'/> for the next exchange.</p>
</Header>