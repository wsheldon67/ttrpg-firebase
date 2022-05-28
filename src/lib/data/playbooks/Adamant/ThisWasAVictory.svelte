<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='This Was a Victory'>
  <p>Reveal that you have sabotaged a building, device, or vehicle right as it becomes relevant.</p>
  <Header h={2} {start} title='Roll Passion'>
    <p>Mark 1 <Tip text='fatigue'/></p>
    <FullResult>
      <tr>
        <td>Something or someone you care about is hurt.</td>
        <td>Create a fleeting opportunity</td>
        <td>Create an opportunity</td>
      </tr>
    </FullResult>
  </Header>
</Header>