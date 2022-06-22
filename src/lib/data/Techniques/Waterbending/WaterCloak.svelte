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
<Header h={1} {start} {hide} title='Water Cloak'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Surround yourself with water.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li><Tip text='Hold'/> 3</li>
  </ul>
  <p>Spend your hold to:</p>
  <ul>
    <li>Reduce the fatigue or conditions inflicted by an incoming attack by 1</li>
    <li>Become <Tip text='favored'/> for the next exchange, as long as you use waterbending techniques.</li>
    <li>Throw water into the environment, affecting it and possibly inflicting a <Tip text='status'/></li>
  </ul>
  <p>Mark 1 fatigue at the end of each exchange to maintain the hold to the next exchange.</p>
</Header>