<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import type { Move } from '../moves';
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Martial Sensitive">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Read a foes intentions and gestures ini the heat of battle. When you <Tip text='defend and maneuver'/> against a foe whose <Tip text='principle'/> you know:</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Roll with Harmony instead of Focus</li>
  </ul>
</Header>