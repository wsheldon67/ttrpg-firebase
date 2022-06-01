<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
import FullResult from '$lib/c/FullResult.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Resist Shifting Your Balance'>
  <slot slot="header"/>
  <p>When you resist an NPC that is trying to shift your <Tip text='balance'/>, roll without a modifier.</p>
  <FullResult>
    <tr>
      <td>Mark a <Tip text='condition'/>, and the GM shifts your balance twice.</td>
      <td>Choose 1 option below</td>
      <td>Choose 2 options below</td>
    </tr>
  </FullResult>
  <p>Options:</p>
  <ul>
    <li>Clear a condition or mark growth by <Tooltip tip='You must prove the NPC wrong within the context of the fiction to choose this option.'>immediately proving them wrong</Tooltip></li>
    <li><Tip text='Shift your balance'/> towards the opposite principle</li>
    <li>Learn what their principle is. If you already know, take +1 <Tip text='forward'/> against them.</li>
  </ul>
</Header>