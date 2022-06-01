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
<Header h={1} {start} {hide} title='Deny a Callout'>
  <slot slot="header"/>
  <p>Deny a call to <Tip text='live up to your principle'/>.</p>
  <p>Roll with that <Tip text='principle'/>:</p>
  <FullResult>
    <tr>
      <td rowspan="2">Clear 1 <Tip text='fatigue'/>, clear a <Tip text='condition'/>, or <Tip text='shift your balance'/>.</td>
      <td colspan="2">Act as they say, or take 1 fatigue</td>
    </tr>
    <tr>
      <td style='width: 3em;'>-</td>
      <td>Also, shift your balance towards the principle</td>
    </tr>
  </FullResult>
</Header>