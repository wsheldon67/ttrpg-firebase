<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '../../Moves/_FullResult.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Badge of Authority'>
  <p>Give an NPC an order based on the authority granted by a badge or symbol of authority from your background. Roll <Tip text='Passion'/></p>
  <FullResult>
    <tr>
      <td>They do as they please and you take -1 <Tip text='forward'/></td>
      <td>They choose from:
        <ul>
          <li>They do it, but in lackluster fashion</li>
          <li>They say they need something first to be able to do it</li>
          <li>They do it, but they're going to talk to your superiors</li>
        </ul>
      </td>
      <td>They do what you say</td>
    </tr>
  </FullResult>
</Header>