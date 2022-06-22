<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Fire Stream">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Fatigue bind:character={character} amt={3} />
      <Fatigue bind:character={character} amt={5} />
    {/if}
    <slot />
  </div>
  <p><em>Pour fire upon a target.</em></p>
  <p>Choose how much <Tip text='fatigue'/> to mark:</p>
  <table>
    <tr>
      <th>Fatigue</th>
      <th>Inflict target with:</th>
    </tr>
    <tr>
      <td>1 fatigue</td>
      <td><Tip text='Impaired'/></td>
    </tr>
    <tr>
      <td>3 fatigue</td>
      <td>Impaired and <Tip text='Doomed'/></td>
    </tr>
    <tr>
      <td>5 fatigue</td>
      <td>Impaired, Doomed, and <Tip text='Trapped'/></td>
    </tr>
  </table>
</Header>