<script lang='ts'>
  import { results } from '$lib/data/roll_results'
  export let label:string
  $: text = results(label)
</script>
<table>
  <tr>
    <th>0-6</th>
    <th>7-9</th>
    <th>10+</th>
  </tr>
  <tr>
    <td rowspan={text[3] ? 2 : 1}>{@html text[0]}</td>
    <td>{@html text[1]}</td>
    <td>{@html text[2]}</td>
  </tr>
  {#if text[3]}
    <tr>
      <td colspan="2">{@html text[3]}</td>
    </tr>
  {/if}
</table>