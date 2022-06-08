<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import FullResult from '$lib/c/FullResult.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Judging a Rival">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Size someone up. Roll Focus:</p>
  <FullResult>
    <tr>
      <td>They notice you watching them; they may ask you 1 question</td>
      <td>Ask 1 question</td>
      <td>Ask 2 questions</td>
    </tr>
  </FullResult>
  <p>Questions:</p>
  <ul>
    <li>What are your weaknesses/strengths?</li>
    <li>How can I show you dominance/submission?</li>
    <li>What do you intend to do next?</li>
    <li>What do you wish I'd do right now?</li>
  </ul>
</Header>