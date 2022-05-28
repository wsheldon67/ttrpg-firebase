<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Urban'>
  <p>You grew up running the streets of a big city like the Northern Water Tribe capital, Yu Dao, or Republic City. You rub shoulders with people from many different walks of life, and you might not feel so at home if your journey takes you to the wilderness.</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>What unexpected skills and knowledge do you have from city life?</li>
      <li>Which urban amenities do you miss - and which hardships do you not miss?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>King Bumi</li>
      <li>Bolin</li>
      <li>Jargala</li>
    </ul>
  </Header>
</Header>