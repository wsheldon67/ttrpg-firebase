<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { backgrounds } from '$lib/data/backgrounds'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Wilderness' is_page_title>
  <p>{backgrounds.Wilderness}</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>Which terrain makes you feel at home?</li>
      <li>What special skills arer you most proud of - perhaps orienteering, herbalism, sailing, or animal training?</li>
      <li>What excites you, and what scares you, about big-city adventures?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Avatar Korra</li>
      <li>Lek</li>
      <li>Katara</li>
    </ul>
  </Header>
</Header>