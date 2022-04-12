<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Squeezing Through a Small Space'>
  <p>A creature can squeeze through a space one size category smaller than itself.</p>
  <ul>
    <li>Movement cost increased by 1</li>
    <li>Disadvantage to attack rolls and dexterity saving throws</li>
    <li>Attacks against have advantage</li>
  </ul>
</Header>