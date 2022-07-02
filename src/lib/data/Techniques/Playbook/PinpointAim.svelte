<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Pinpoint Aim'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>Take the time you need to line up a perfect shot.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/></li>
  </ul>
  <p>In the next <Tip text='exchange'/>, if you <Tip text='advance and attack'/>, roll with Focus or Passion, your choice.</p>
  <ul><li>If you use <Tip text='Strike'/>, you do not have to mark <Tip text='fatigue'/> to choose what you inflict.</li></ul>
</Header>