<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '../../Moves/_FullResult.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Takes One to Know One'>
  <p>Verbally needle someone by finding the weaknesses in their armor.</p>
  <Header h={2} {start} title='Roll Focus'>
    <FullResult>
      <tr>
        <td>They ask 1 question, answer honestly</td>
        <td>You both ask 1 question, both answer honestly or mark 2 <Tip text='fatigue'/></td>
        <td>You ask 1 question, they answer honestly or mark 2 fatigue</td>
      </tr>
    </FullResult>
    <p>Questions:</p>
    <ul>
      <li>What is your principle?</li>
      <li>What do you need to prove?</li>
      <li>What could shake your certainty?</li>
      <li>Whom do you care about more than you let on?</li>
    </ul>
  </Header>
</Header>