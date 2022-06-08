<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Status from '$lib/c/Status.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Wait and Listen">
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><Tip text='Assess a situation'/> while taking the time to use your extraordinary skills to absorb hidden or deep information.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Roll with Focus instead of Creativity</li>
    <li>Become <Tip text='prepared'/>/li>
  </ul>
</Header>