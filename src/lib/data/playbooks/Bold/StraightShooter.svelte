<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '$lib/c/FullResult.svelte'
import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Straight Shooter'>
  <p>Tell an NPC the blunt, honest truth about what you really think of them and their plans. Roll <Tip text='Focus'/>:</p>
  <FullResult>
    <tr>
      <td>They are furious or genuinely hurt.</td>
      <td colspan="2">They answer a non-compromising question honestly and grant a simple favor.</td>
    </tr>
    <tr>
      <td></td>
      <td>They tell you how they see you, mark a <Tip text='condition'/></td>
    </tr>
  </FullResult>
</Header>