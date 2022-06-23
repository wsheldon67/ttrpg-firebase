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
<Header h={1} {start} {hide} title="Lava Star">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored'/>
    {/if}
    <slot />
  </div>
  <p><em>Creating a floating, spinning star of lava that can cut through nearly anything.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Become <Tip text='favored'/> as long as the star is active.</li>
  </ul>
  <p>Every time you use the star as part of an attack, you can also cut through or destroy part of the scenery as if you had used <Tip text='Smash'/>, at no additional cost.</p>
  <p>Mark 1 fatigue at the end of each <Tip text='exchange'/> to keep the star active.</p>
</Header>