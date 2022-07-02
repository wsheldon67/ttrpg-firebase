<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Overwhelm'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  <p><em>Throw a punch with all your weight behind it.</em></p>
  <ul>
    <li>Mark 3 <Tip text='fatigue'/></li>
    <li>Inflict <Tip text='stunned'/> on an engaged foe</li>
  </ul>
</Header>