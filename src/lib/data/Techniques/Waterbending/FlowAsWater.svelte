<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Flow as Water'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Use a jet of water to propel yourself smoothly around obstacles.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Move to a new location</li>
  </ul>
  <p>If you engage with or disengage from a foe, they are <Tip text='impaired'/></p>
</Header>