<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Resistance from './Resistance.svelte'
  import Vulnerability from './Vulnerability.svelte'
  export let start: number = 1
  let low = start + 1
</script>
<Header h={1} {start} title='Damage Resistance and Vulnerability'>
  <p>Some creatures and objects are exceedingly difficult or easy to hurt with certain types of damage.</p>
  <Resistance start={low} />
  <Vulnerability start={low} />
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Applied <strong>after</strong> other modifiers to damage.</li>
    </ul>
    <p>Does not stack:</p>
    <table>
      <tr>
        <th>Resistances</th>
        <th>Vulnerabilities</th>
        <th>Result</th>
      </tr>
      <tr>
        <td>1 or more</td>
        <td>None</td>
        <td>Damage is halved</td>
      </tr>
      <tr>
        <td>None</td>
        <td>1 or more</td>
        <td>Damage is doubled</td>
      </tr>
      <tr>
        <td>1 or more</td>
        <td>1 or more</td>
        <td>No change to damage (cancels out)</td>
      </tr>
    </table>
  </Header>
</Header>