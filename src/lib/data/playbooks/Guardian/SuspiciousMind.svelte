<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import ResultTable from '$lib/c/ResultTable.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Suspicious Mind'>
  <p>Watch a person carefully to figure them out. Roll <Tip text='focus'/>:</p>
  <ResultTable>
    <td><Tip text='Hold'/> 1</td>
    <td>Hold 2</td>
  </ResultTable>
  <p>Use hold to ask questions while you interact, they must answer honestly:</p>
  <ul>
    <li>Are you telling the truth?</li>
    <li>What are you truly feeling?</li>
    <li>What do you really want right now?</li>
    <li>What are you worried about?</li>
    <li>What are you about to do?</li>
  </ul>
</Header>