<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link die
</script>
<Header h={1} {start} {show} title='Dropping to 0 Hit Points'>
  <p>If the damage gives you negative hit points equal to or exceeding your maximum hit points, you <Tip text='die'/>.</p>
  <p>Otherwise, you are <Tip text='unconcious'/> and unstable.</p>
</Header>
<Header h={1} {start} {show} title='Unstable'>
  <p>At the beginning of your turn, make a Death Saving Throw (a d20).</p>
  <table>
    <tr>
      <th>Saving Throw</th>
      <th>Result</th>
    </tr>
    <tr>
      <td>1</td><td>2 failures</td>
    </tr>
    <tr>
      <td>2-9</td><td>1 failure</td>
    </tr>
    <tr>
      <td>10-19</td><td>1 success</td>
    </tr>
    <tr>
      <td>20</td><td>Heal 1 HP</td>
    </tr>
    <tr>
      <th>Damage</th><th>Result</th>
    </tr>
    <tr>
      <td>Non-crit</td><td>1 failure</td>
    </tr>
    <tr>
      <td>Critical Hit</td><td>2 failures</td>
    </tr>
    <tr>
      <td>Exceeds max HP</td><td>Die</td>
    </tr>
  </table>
  <p>Effects</p>
  <ul>
    <li>3 total sucesses = become stable</li>
    <li>3 total failures = die</li>
  </ul>
</Header>
<Header h={1} {start} {show} title='Stabilize'>
  <p>An unstable creature that gains HP becomes stable and regains conciousness.</p>
  <p>A DC 10 Medicine check stablizes a creature but leaves them unconcious.</p>
  <p>While stable:</p>
  <ul>
    <li>Taking damage = go back to unstable.</li>
    <li>Remain stable for 1d4 hours = regain 1 HP.</li>
  </ul>
</Header>