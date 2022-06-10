<script lang='ts'>
  import FullResult from '$lib/c/FullResult.svelte'
import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte';
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
import type { Move } from '../moves';
import Conditions from '../../../../routes/character/Display/Conditions.svelte'
import Bonus from '$lib/c/Bonus.svelte';
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="I'm a People Person">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
      <Bonus bind:character={character} name='+1 Ongoing to act on the answers' source="I'm a People Person" label='+1 Ongoing'/>
    {/if}
    <slot />
  </div>
  {#if character}
    <Conditions bind:character={character} start={start+1} />
  {/if}
  <p>Watch someone interact with another person. Roll Focus:</p>
  <FullResult>
    <tr>
      <td>You can't get a good read; mark a <Tip text='condition'/> in frustration.</td>
      <td>Ask 1 question</td>
      <td>Ask 2 questions</td>
    </tr>
  </FullResult>
  <p>Questions:</p>
  <ul>
    <li>Are you lying right now?</li>
    <li>What are you most afraid of?</li>
    <li>How are you vulnerable to me?</li>
    <li>How can I get you to mark the condition <select>
      <option>Afraid</option><option>Angry</option><option>Guilty</option>
      <option>Insecure</option><option>Troubled</option>
    </select>?</li>
  </ul>
  <p>Take +1 <Tip text='ongoing'/> to act on the answers.</p>
</Header>