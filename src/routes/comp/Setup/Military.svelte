<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { backgrounds } from '$lib/data/backgrounds'
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Military' is_page_title>
  <p>{backgrounds.Military}</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>Are you a solider, sailor, or spy?</li>
      <li>Do you still answer to your commanding officer, or have you gone rogue?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Kyoshi Warriors</li>
      <li>Iroh</li>
      <li>Kuvira</li>
    </ul>
  </Header>
</Header>