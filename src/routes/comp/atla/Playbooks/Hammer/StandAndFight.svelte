<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import FullResult from '../../Moves/_FullResult.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Stand and Fight!'>
  <p>When you provoke an NPC opponent into attack you, roll with <Tip text='Passion'/>.</p>
  <FullResult>
    <tr>
      <td>They take advantage of your provocation to strike a blow where you least expect it.</td>
      <td>They're coming at you specifically.</td>
      <td>You're ready for them; clear a <Tip text='condition'/> or become <Tip text='Prepared'/>.</td>
    </tr>
  </FullResult>
</Header>