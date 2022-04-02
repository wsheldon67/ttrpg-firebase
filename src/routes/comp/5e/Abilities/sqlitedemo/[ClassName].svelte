<script lang='ts'>
  import { goto } from '$app/navigation';

  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
  export let classes: {id: number, name: string}[]
  export let levels: {prof: number, level: number}[]

  function choose_class(e) {
    goto(`/comp/5e/Abilities/Proficiency/${e.target.value}`)
  }
</script>
<Header h={1} {start} {show} title='Proficiency'>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Cannot be added to a signle die roll or other number more than once.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Lookup'>
    <label>
      Class:
      <select on:input={choose_class}>
      {#each classes as one}
        <option value={one.id}>{one.name}</option>
      {/each}
      </select>
    </label>
    <table>
      <tr>
        <th>Level</th>
        <th>Proficiency</th>
      </tr>
      {#each levels as level}
        <tr>
          <td>{level.level}</td>
          <td>{level.prof}</td>
        </tr>
      {/each}
    </table>
  </Header>
</Header>