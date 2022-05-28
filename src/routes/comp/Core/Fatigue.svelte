<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Fatigue'>
  <p>PCs have 5 fatigue boxes</p>
  <ul>
    <li>You cannot voluntarily accept more than 5 fatigue.</li>
    <li>If you are forced to take more than 5 fatigue, you take <Tip text='conditions'/> instead.</li>
  </ul>
  <Header h={2} {start} title='Clearing Fatigue'>
    <table>
      <tr>
        <th>Scenario</th>
        <th>Fatgiue Cleared</th>
      </tr>
      <tr>
        <td><Tooltip tip="Low on food or water; Surronded by enemies/constantly on guard">Stressful night</Tooltip></td>
        <td>0-1</td>
      </tr>
      <tr>
        <td><Tooltip tip="Cold ground; rocks for a bed">A rough night</Tooltip></td>
        <td>2</td>
      </tr>
      <tr>
        <td><Tooltip tip="Covered stable or barn">A sheltered night</Tooltip></td>
        <td>3</td>
      </tr>
      <tr>
        <td><Tooltip tip="A house; A mat and a blanket">A comfortable night</Tooltip></td>
        <td>4</td>
      </tr>
      <tr>
        <td><Tip text='Guide and Comfort'/></td>
        <td>2</td>
      </tr>
    </table>
  </Header>
</Header>