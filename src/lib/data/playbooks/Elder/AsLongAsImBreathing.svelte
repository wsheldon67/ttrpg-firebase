<script lang='ts'>
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
<Header h={1} {start} {hide} title="As Long As I'm Breathing">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p><Tip text='Intimidate'/> someone in order to protect the vulnerable or weak.</p>
  <ul><li>Roll with Harmony instead of Passion.</li></ul>
</Header>