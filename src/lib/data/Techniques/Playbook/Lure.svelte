<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Lure'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>You put a foe off-balance by luring them in.</em></p>
  <ul><li>Name a foe to lure.</li></ul>
  <p>If they don't attempt to inflict <Tip text='fatigue'/>, <Tip text='conditions'/>, <Tip text='balance shifts'/>, or negative <Tip text='statuses'/> on you by the end of this <Tip text='exchange'/>:</p>
  <ul><li>They must mark 2 fatigue.</li></ul>
  <p>If they do attempt to harm you this exchange:</p>
  <ul><li>You become <Tip text='favored'/> for the next exchange.</li></ul>
</Header>