<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Stance Move'>
  <p>Roll, based on your <Tip text='approach'/>:</p>
  <ul>
    <li><Tip text='Defend and maneuver'/> = Focus</li>
    <li><Tip text='Advance and attack'/> = Passion</li>
    <li><Tip text='Evade and observe'/> = choice of Creativity or Harmony</li>
  </ul>
  <FullResult>
    <tr>
      <td>Can choose to <Tip text='shift your balance'/> away from center to use 1 <Tip text='basic'/> technique.</td>
      <td>Use 1 basic or <Tip text='mastered'/> technique</td>
      <td>
        Choose one:
        <ul>
          <li>Mark 1 <Tip text='fatigue'/> to use a <Tip text='learned'/> technique</li>
          <li>Use 1 <Tip text='practiced'/> technique</li>
          <li>Use 2 different basic or mastered techniques</li>
        </ul>
      </td>
    </tr>
  </FullResult>
</Header>