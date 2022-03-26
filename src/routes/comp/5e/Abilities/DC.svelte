<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Difficulty Class'>
  <p>Often abbreviated 'DC'.</p>
  <p>An ability check must <em>meet</em> or <em>exceed</em> a DC to succeed.</p>
  <table>
    <tr>
      <th>DC</th><th>Difficulty</th>
    </tr>
    <tr>
      <td>5</td><td>Very easy</td>
    </tr>
    <tr>
      <td>10</td><td>Easy</td>
    </tr>
    <tr>
      <td>15</td><td>Medium</td>
    </tr>
    <tr>
      <td>20</td><td>Hard</td>
    </tr>
    <tr>
      <td>25</td><td>Very hard</td>
    </tr>
    <tr>
      <td>30</td><td>Nearly impossible</td>
    </tr>
  </table>
</Header>