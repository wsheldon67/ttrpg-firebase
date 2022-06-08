<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Walls Can't Hold Me">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>When you <Tip text='rely on your skills and training'/>, to dangerously smash your way through walls or other obstacles, roll with <Tip text='Passion'/> instead of <Tip text='Focus'/>.</p>
</Header>