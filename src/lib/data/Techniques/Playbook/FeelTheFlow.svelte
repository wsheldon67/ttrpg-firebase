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
<Header h={1} {start} {hide} title='Feel the Flow'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
      <Fatigue bind:character={character} amt={-1} />
    {/if}
  </div>
  <p>Take pause to feel the flow of battle and study the way your opposition fights.</p>
  <ul>
    <li>Become <Tip text='favored'/></li>
    <li>If they share a <Tip text='training'/> with you, learn their <Tip text='principle'/></li>
    <li>If you know their principle, clear 1 <Tip text='fatigue'/></li>
  </ul>
</Header>