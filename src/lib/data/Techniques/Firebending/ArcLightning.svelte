<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Arc Lightning">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Channel lightning through your body against a closely engaged foe.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict a <Tip text='condition'/> on an <Tip text='engaged'/> foe who used an <Tip text='advance and attack'/> technique against you this <Tip text='exchange'/>.</li>
    <li>If they already have 2 conditions marked, they are also <Tip text='stunned'/></li>
  </ul>
</Header>