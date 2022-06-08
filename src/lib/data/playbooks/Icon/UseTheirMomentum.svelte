<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Status from '$lib/c/Status.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Use Their Momentum'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p>Engage with a large or powerful foe.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li><Tip text='advance and attack'/> with Focus instead of Passion.</li>
    <li>Become <Tip text='Prepared'/></li>
  </ul>
  <p>You may also use <Tip text='Retaliate'/> as if it were an advance and attack technique.</p>
</Header>