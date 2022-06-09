<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves'
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Call From Afar'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Reach out in mind or spirit to a far-away NPC.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Roll Harmony</li>
  </ul>
  <FullResult>
    <tr>
      <td>Your reach extends beyond your original aim; you've attracted dangerous attention.</td>
      <td>Choose 1 option.</td>
      <td>Choose 2 options.</td>
    </tr>
  </FullResult>
  <ul>
    <li>You cry for help; they hear you and rush to your location.</li>
    <li>You whisper a question to them; they whisper an answer back.</li>
    <li>You send a premonition of danger seeking them; they forearm and prepare themself to face the worst.</li>
    <li>You let them see something you see; they return memories and knowledge of that sight.</li>
  </ul>
</Header>