<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="It Doesn't Belong to You!">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Secretly pocket something owned by someone undeserving. Roll Harmony:</p>
  <FullResult>
    <tr>
      <td>They notice and pursue as soon as you exit the <Tip text='scene'/></td>
      <td>The thing isn't exactly what you thought it was</td>
      <td>They do not notice</td>
    </tr>
  </FullResult>
</Header>