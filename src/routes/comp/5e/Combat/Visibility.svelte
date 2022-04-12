<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Hidden Combatants'>
  <p>Attempting to attack a hidden target:</p>
  <ul>
    <li>You may have to guess its location.</li>
    <li>If you guess correctly, you have <Tip text='disadvantage'/> to attack.</li>
  </ul>
  <p>Attacking while hidden:</p>
  <ul>
    <li>You have <Tip text='advantage'/> to attack.</li>
    <li>The attack reveals your location.</li>
  </ul>
</Header>
<Header h={1} {start} {show} title='Cover'>
  <p>The portion of a creature that is covered.</p>
  <table>
    <tr>
      <th>Level</th>
      <th>Benefit</th>
    </tr>
    <tr>
      <td>Half Cover</td>
      <td>+2 AC, +2 Dex Saves</td>
    </tr>
    <tr>
      <td>3/4 Cover</td>
      <td>+5 AC, +5 Dex Saves</td>
    </tr>
    <tr>
      <td>Full Cover</td>
      <td>Can't be targeted, except by area of effect</td>
    </tr>
  </table>
</Header>