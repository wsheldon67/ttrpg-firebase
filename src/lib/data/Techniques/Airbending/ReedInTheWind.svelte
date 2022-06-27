<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Reed In The Wind">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Adjust your movements to perfectly match and avoid the movements of a foe.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
    <li>Secretly name the <Tip text='approach'/> you believe your foe will use in the next <Tip text='exchange'/></li>
  </ul>
  <p>After the approaches are chosen in the next exchange, reveal the approach you named:</p>
  <table>
    <tr>
      <th>If you were incorrect</th>
      <th>If you were correct</th>
    </tr>
    <tr>
      <td>You may change your chosen approach</td>
      <td>You become <Tip text='favored'/> for the exchange, and your target cannot target you with any techniques.</td>
    </tr>
  </table>
</Header>