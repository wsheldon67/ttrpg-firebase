<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true

</script>
<style>
  td {
    width: 3.5em;
  }
</style>
<Header h={1} {start} {show} title='Proficiency'>
  <ul>
    <li>Cannot be added to a signle die roll or other number more than once.</li>
  </ul>
  <table>
    <tr>
      <th>Level</th>
      <th>Proficiency</th>
    </tr>
    <tr>
      <td>1-4</td><td>2</td>
    </tr>
    <tr>
      <td>5-8</td><td>3</td>
    </tr>
    <tr>
      <td>9-12</td><td>4</td>
    </tr>
    <tr>
      <td>13-16</td><td>5</td>
    </tr>
    <tr>
      <td>17-20</td><td>6</td>
    </tr>
  </table>
</Header>