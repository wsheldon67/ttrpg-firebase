<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Blinded By Science">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Fatigue bind:character={character} amt={2} />
      <Fatigue bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  <p><em>Use your gadgets and gizmos in a way that confuses and dazzles even the most tech-savvy foe.</em></p>
  <p>Mark up to 3 <Tip text='fatigue'/>:</p>
  <table>
    <tr>
      <th>Fatigue Marked</th>
      <th colspan="2">Effect</th>
    </tr>
    <tr>
      <td>1 Fatigue</td>
      <td rowspan="3">Inflict 1 fatigue and <Tip text='impaired'/></td>
    </tr>
    <tr>
      <td>2 Fatigue</td>
      <td>Also inflict <Tip text='trapped'/> or <Tip text='stunned'/></td>
    </tr>
    <tr>
      <td>3 Fatigue</td>
      <td>Also inflict trapped <strong>and</strong> stunned</td>
    </tr>
  </table>
</Header>