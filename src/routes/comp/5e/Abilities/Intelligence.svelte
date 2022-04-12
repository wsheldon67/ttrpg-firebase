<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Intelligence'>
  <Header h={2} {start} title='Recall Lore'>
    <p>Several intelligence skills are about recalling lore:</p>
    <table>
      <tr>
        <th>Skill</th>
        <th>Topics</th>
      </tr>
      <tr>
        <td>Arcana</td>
        <td>Spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes</td>
      </tr>
      <tr>
        <td>History</td>
        <td>Historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations</td>
      </tr>
      <tr>
        <td>Nature</td>
        <td>Terrain, plants, animals, the weather, and natural cycles</td>
      </tr>
      <tr>
        <td>Religion</td>
        <td>Dieties, rites, prayers, religious hierarchies, holy symbols, and the practices of secret cults</td>
      </tr>
      <tr>
        <td>Other</td>
        <td>Craft or trade</td>
      </tr>
    </table>
  </Header>
  <Header h={2} {start} title='Investigation'>
    <p>Look for clues and make deductions based on those clues.</p>
  </Header>
  <Header h={2} {start} title='Other'>
    <ul>
      <li>Communicate with a creature wihtout using words</li>
      <li>Estimate the value of an item</li>
      <li>Create a disguise</li>
      <li>Forge a document</li>
      <li>Win a game of skill</li>
    </ul>
  </Header>
</Header>