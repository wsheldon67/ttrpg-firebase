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
<Header h={1} {start} {hide} title='Walk This Way'>
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Make over, disguise, or coach your friends to fit in with a specific crowd appropriate to one of your backgrounds. Roll Creativity:</p>
  <FullResult>
    <tr>
      <td>The only way to get the access you desired is for one of your friends to take on an uncomfortable, dangerous, or attention-grabbing role.</td>
      <td>You fool nearly everyone, there's only a single gatekeeper who asks any questions or stands in your way.</td>
      <td>The performance is flawless; you gain access to wherever you wanted to fit in while attracting little suspicion.</td>
    </tr>
  </FullResult>
</Header>