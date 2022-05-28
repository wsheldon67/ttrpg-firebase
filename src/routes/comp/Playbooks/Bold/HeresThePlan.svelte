<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '../../Moves/_FullResult.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Here's The Plan">
  <p>You commit to a plan you've proposed to the group:</p>
  <ul>
    <li>Roll with <Tip text='Creativity'/></li>
    <li>Take -1 for each of your companions who isn't on board</li>
  </ul>
  <FullResult>
    <tr>
      <td><Tip text='hold'/> 1; Your plan goes awry when you encounter surprising opposition.</td>
      <td>Hold 1</td>
      <td>Hold 2</td>
    </tr>
    <p>Spend your hold while the plan is being carried out to overcome or evade an obstacle, create an advantage, or neutralize a danger.</p>
    <ul><li>If any companion abandons you, mark a <Tip text='condition'/></li></ul>
  </FullResult>
</Header>