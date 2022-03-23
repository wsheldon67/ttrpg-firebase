<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Exhaustion'>
  <p>Exhaustion has six levels. An effect can give a creature one or more levels of exhaustion, specified in its description.</p>
  <p>Effects are cumulative.</p>
  <table>
    <tr>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Disadvantage on ability checks</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Speed halved</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Disadvantage on attack rolls and saving throws</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Hit point maximum halved</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Speed reduced to 0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Death</td>
    </tr>
  </table>
  <p>A long rest + food and drink reduces exhaustion by 1.</p>
</Header>