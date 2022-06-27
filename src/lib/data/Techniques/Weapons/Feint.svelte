<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Feint">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Trick your foes into overextending themselves against you.</em></p>
  <p>If you were targeted by any attacks this exchange, you may mark 1 <Tip text='fatigue'/> to immediately inflict a <Tip text='condition'/> on each of your attackers.</p>
</Header>