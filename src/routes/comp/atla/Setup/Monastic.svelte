<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Monastic'>
  <p>You are or were a monk, nun, or acolyte of a particular order. Perhaps you were devoted to finding enlightenment or helping others in a community with other like-minded devotees, or pherhaps you were committed to scholastic rituals and bureacratic traditions.</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>What is your order's goal?</li>
      <li>What are its rules?</li>
      <li>In what ways did your upbringing agree with you, and in what ways did you long for something different?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Avatar Aang</li>
      <li>Fire Sage Shyu</li>
      <li>Gyatso</li>
    </ul>
  </Header>
</Header>