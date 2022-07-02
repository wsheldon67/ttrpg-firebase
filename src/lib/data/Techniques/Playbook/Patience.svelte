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
<Header h={1} {start} {hide} title='Patience'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>You wait until the perfect moment to act.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Gain <Tip text='prepared'/></li>
    <li>Use an <Tip text='advance and attack'/> technique, paying costs as normal.</li>
  </ul>
  <p>Mark another fatigue to allow a companion engaged with the same foe to also use an advance and attack technique against them.</p>
</Header>