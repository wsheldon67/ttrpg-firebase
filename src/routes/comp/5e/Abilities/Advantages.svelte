<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Advantage from './Advantage.svelte'
  import Disadvantage from './Disadvantage.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Advantage/Disadvantage'>
  <Advantage start={start+1} />
  <Disadvantage start={start+1} />
  <Header h={2} {start} title='Multiple (Dis)Advantages'>
    <p>Advantages and disadvantages do not stack:</p>
    <table>
      <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
        <th>Result</th>
      </tr>
      <tr>
        <td>1 or more</td>
        <td>None</td>
        <td>Creature has advantage</td>
      </tr>
      <tr>
        <td>None</td>
        <td>1 or more</td>
        <td>Creature has disadvantage</td>
      </tr>
      <tr>
        <td>1 or more</td>
        <td>1 or more</td>
        <td>Creatre has neither advantage nor disadvantage (cancels out)</td>
      </tr>
    </table>
  </Header>
  <Header h={2} {start} title='Rerolls'>
    <p>If something lets you reroll a d20 while you have advantage or disadvantage, you reroll only one of the two dice. You may choose which dice to reroll.</p>
  </Header>
</Header>