<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Ice Guantlet'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>Cover your hand with a sheathe of ice.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/></li>
    <li>When you next make an attack, inflict an additional 1 <Tip text='fatigue'/></li>
  </ul>
</Header>