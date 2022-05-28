<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Conditions'>
  <table>
    <tr>
      <th>Condition</th>
      <th>Effect</th>
      <th>To Clear</th>
    </tr>
    <tr>
      <td>Afraid</td>
      <td>-2 to <Tip text='intimidate'/> and <Tip text='call someone out'/></td>
      <td>Run from danger or difficulty</td>
    </tr>
    <tr>
      <td>Angry</td>
      <td>-2 to <Tip text='guide and comfort'/> and <Tip text='assess a situation'/></td>
      <td>Break something important or lash out at a friend.</td>
    </tr>
    <tr>
      <td>Guilty</td>
      <td>-2 to <Tip text='push your luck'/> and +2 to <Tip text='deny a callout'/></td>
      <td>Make a personal sacrifice to absolve your guilt</td>
    </tr>
    <tr>
      <td>Insecure</td>
      <td>-2 to <Tip text='trick'/> and <Tip text='resist shifting your balance'/></td>
      <td>Take foolhardy action without talking to your companions.</td>
    </tr>
    <tr>
      <td>Troubled</td>
      <td>-2 to <Tip text='plead'/> and <Tip text='rely on your skills or training'/></td>
    </tr>
  </table>
  <p>These options clear the condition <strong>at the end of the <Tip text='scene'/>.</strong></p>
  <p>If you already have all 5 conditions and must mark another, you're <Tip text='taken out'/>.</p>
</Header>