<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import FullResult from '../../Moves/_FullResult.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='You Missed Something'>
  <p>Evaluate a friendly NPC's plan. Roll with <Tip text='Focus'/>:</p>
  <FullResult>
    <tr>
      <td>The GM tells you what obvious danger the NPC is ignoring or what they're hiding about their intent.</td>
      <td>The problems are fairly serious, the NPC will be resistant to making changes.</td>
      <td>Drastically improve the chances of success.</td>
    </tr>
  </FullResult>
</Header>