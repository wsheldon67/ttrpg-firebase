<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { backgrounds } from '$lib/data/backgrounds'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Privileged'>
  <p>{backgrounds.Privileged}</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>What advantages did your upbringing give you?</li>
      <li>Now that you're no longer surrounded by safety and ease, what do you miss - and what do you fear?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Asami</li>
      <li>Zuko</li>
      <li>The Beifong family</li>
    </ul>
  </Header>
</Header>