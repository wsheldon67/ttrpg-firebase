<script lang='ts'>
  import FullResult from '$lib/c/FullResult.svelte'
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves';
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Building Bridges">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Try to calm an immediate conflict between two NPCs by reminding them what they have in common. Roll Harmony:</p>
  <FullResult>
    <tr>
      <td>You inadvertently highlight their differences and fan the conflict. You cannot use this move on them again.</td>
      <td>They come to terms for now. They won't pursue their conflict until an outside influence reignites it or a day or more passes.</td>
      <td>You have a real opportunity to get them to put aside their differences for good; the GM will tell you what you must do.</td>
    </tr>
  </FullResult>
</Header>