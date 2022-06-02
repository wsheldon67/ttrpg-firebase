<script lang='ts'>
import Fatigue from '$lib/c/Fatigue.svelte';

  import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte'
import type { Data } from '$lib/data/character';
import type { Move } from '../moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Best Friend'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Your small animal companion could helps you <Tip text='push your luck'/>:</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Roll with <Tip text='Creativity'/> instead of <Tip text='Passion'/></li>
  </ul>
  <p>If your animal companion ever gets hurt, mark a <Tip text='condition'/>.</p>
</Header>