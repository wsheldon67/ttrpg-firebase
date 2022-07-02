<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Wall of Perfection'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Create a perfect wall of defense around yourself and any allies directly next to you.</em></p>
  <p>Mark 1 <Tip text='fatigue'/>:</p>
  <ul class='or'>
    <li>Block a single attack towards the wall</li>
    <li>Keep an enemy at bay who tries to penetrate the wall</li>
  </ul>
</Header>