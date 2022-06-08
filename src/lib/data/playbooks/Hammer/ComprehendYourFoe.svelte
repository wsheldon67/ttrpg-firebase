<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Fatigue from '$lib/c/Fatigue.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Comprehend Your Foe'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>When you <Tip text='defend and maneuver'/> against a foe whose balance <Tip text='principle'/> you know, you may mark <Tip text='fatigue'/> to roll with <Tip text='Creativity'/> instead of <Tip text='Focus'/>.</p>
</Header>