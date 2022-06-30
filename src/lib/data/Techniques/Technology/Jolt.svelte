<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Jolt">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Launch a disruptive attack on a target within reach in an attempt to control or slow them.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
  </ul>
  <p>Target a person or an object</p>
  <table>
    <tr>
      <th>Target Person</th>
      <th>Target Object</th>
    </tr>
    <tr>
      <td>
        <p>They must <Tip text='shift their balance'/> away from center</p>
        <ul><li>If they are a technology user or covered in metal, they become <Tip text='stunned'/></li></ul>
      </td>
      <td>
        The object is temporarily slowed or shut down
      </td>
    </tr>
  </table>
</Header>