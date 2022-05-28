<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Privileged'>
  <p>You grew up in the lap of luxury, wealth, or prestige as a hereditary aristocrat, prominent merchant, or even the heir to a successful crime family.</p>
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