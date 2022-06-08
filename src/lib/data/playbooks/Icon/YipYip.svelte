<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte';
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Yip Yip!'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored' />
      <Fatigue bind:character={character} amt={-5} />
    {/if}
    <slot />
  </div>
  <p>You have an animal companion large enough to ride.</p>
  <p>Fight beside your animal companion:</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Become <Tip text='Favored'/> for one <Tip text='exchange'/></li>
  </ul>
  <p>Something hurts your animal companion:</p>
  <ul>
    <li>Mark a <Tip text='condition'/></li>
  </ul>
  <p>You and your friends travel via your animal companion:</p>
  <ul>
    <li>Every clears all fatigue</li>
  </ul>
</Header>