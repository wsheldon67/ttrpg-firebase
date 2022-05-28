<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Wilderness'>
  <p>You grew up in a town or household surrounded by nature, the elements in their most raw form, and developed advanced survival skills because of it.</p>
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