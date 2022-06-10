<script lang='ts'>
  import FullResult from '$lib/c/FullResult.svelte'
import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import Conditions from '../../../../routes/character/Display/Conditions.svelte'
import type { Move } from '../moves';
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Cut the Garbage">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  {#if character}
    <Conditions bind:character={character} start={start+1} hide/>
  {/if}
  <p>Openly confront someone to get the truth. Roll Harmony:</p>
  <FullResult>
    <tr>
      <td rowspan="2">The confrontations goes awry; they inflict a <Tip text='condition'/> on you and ask one question; you must answer honestly.</td>
      <td colspan="2">Ask 2 questions.</td>
    </tr>
    <tr>
      <td>They get to ask 1 question.</td>
    </tr>
  </FullResult>
  <p>Questions:</p>
  <ul>
    <li>Are you telling the truth?</li>
    <li>What are you really feeling?</li>
    <li>What do you intend to do next?</li>
    <li>What do you really think about _____?</li>
    <li>How could I get you to _____?</li>
  </ul>
  <p>The <strong>player</strong> must answer these questions honestly, even if the <strong>character</strong> does not.</p>
</Header>