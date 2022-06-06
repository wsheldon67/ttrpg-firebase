<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Trapped' is_page_title>
  <p>You're completely helpless. You must mark 3 <Tip text='fatigue'/> or <Tip text='conditions'/> to escape.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Encased in ice</li>
      <li>Pinned by a heavy beam</li>
      <li>Pulled into the earth so only your head sticks out</li>
    </ul>
  </Header>
</Header>