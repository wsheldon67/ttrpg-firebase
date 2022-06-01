<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
import FullResult from '$lib/c/FullResult.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<style>
  td {
    text-align: center;
  }
</style>
<Header h={1} {start} {hide} title='Call Someone Out'>
  <slot slot="header"/>
  <ol>
    <li>Call someone out to live up to their <Tip text='principle' /></li>
    <li><Tip text='Shift your balance'/> away from center</li>
    <li>Name and roll with their principle:</li>
  </ol>
  <FullResult>
    <tr>
      <td rowspan="2">They can demand you act in accordance with one of your principles, or you can mark a condition.</td>
      <td colspan="2">They act as you say, or they mark a condition.</td>
      <td></td>
    </tr>
    <tr>
      <td>Also, mark 1 <Tip text='fatigue'/> or they shift your balance as they choose.</td>
      <td style='width: 3em;'>-</td>
    </tr>
  </FullResult>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>If you do not know the target's principle, you must guess.</li>
    </ul>
  </Header>
</Header>