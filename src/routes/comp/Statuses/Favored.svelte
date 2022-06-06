<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Favored' is_page_title>
  <p>You're bouyed by circumstance. Choose an additional <Tip text='basic'/> or <Tip text='mastered'/> technique in the next <Tip text='exchange'/>, even on a miss.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Having the high-ground</li>
      <li>An Airbender accelerating themselves with a gale force wind at their back</li>
      <li>A Technologist flipping on the hyper-charge setting on their electric guantlet</li>
    </ul>
  </Header>
</Header>