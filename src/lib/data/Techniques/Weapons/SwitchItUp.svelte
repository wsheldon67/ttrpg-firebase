<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Switch It Up">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>Switch up your style, footwork, weapon, or bearing, causing your foe to second-guess your next move.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Become <Tip text='prepared'/></li>
    <li>Force an <Tip text='engaged'/> foe to reveal their choice of <Tip text='approach'/> before you chose yours during the next <Tip text='exchange'/></li>
  </ul>
</Header>