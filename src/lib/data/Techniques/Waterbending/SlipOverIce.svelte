<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Slip Over Ice'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={-1} />
    {/if}
    <slot />
  </div>
  <p><em>Use ice and water to slip around your environment with ease while putting foes off-balance.</em></p>
  <ul><li>Clear 1 <Tip text='fatigue'/></li></ul>
  <p>Re-position foes within reach, deciding who is <Tip text='engaged'/> with whom.</p>
  <ul><li>They may mark 1 fatigue and become <Tip text='impaired'/> to remain where they are.</li></ul>
</Header>