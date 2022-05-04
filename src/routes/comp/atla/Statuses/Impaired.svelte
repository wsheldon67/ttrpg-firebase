<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Impaired'>
  <p>You're slowed, off-balance, impaired, or weakened. Mark 1 <Tip text='fatigue'/> for each action or...</p>
  <table>
    <tr>
      <th>PCs</th>
      <th>NPCs</th>
    </tr>
    <tr>
      <td>Take -2 to all physical actions.</td>
      <td>Choose 1 fewer technique</td>
    </tr>
  </table>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Cleared when the situation that caused it no longer applies.</li>
    </ul>
  </Header>
</Header>