<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { backgrounds } from '$lib/data/backgrounds'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Urban' is_page_title>
  <p>{backgrounds.Urban}</p>
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