<script lang='ts'>
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
<Header h={1} {start} {hide} title="Life's True Delights">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Pursue a genuine moment of respite. Roll Harmony:</p>
  <FullResult>
    <tr>
      <td rowspan="2">You fixate on your past with disastrous results; tell the GM what old conflict mars your peace and <Tip text='shift your balance'/> away from center twice.</td>
      <td colspan="2">Shift your balance as you choose</td>
    </tr>
    <tr>
      <td>Your self-induldgence creates an opportunity for your enemies or rivals; the GM will tell you how.</td>
      <td>You also gain some new insight; ask the GM a question and they will answer honestly.</td>
    </tr>
  </FullResult>
</Header>