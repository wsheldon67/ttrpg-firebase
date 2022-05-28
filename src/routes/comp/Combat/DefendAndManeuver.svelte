<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Defend and Maneuver'>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Blocking incoming strikes with a strong guard</li>
      <li>Tiring out your opponents</li>
      <li>Shifting position</li>
      <li>Knocking down blasts of fire or air sent at you without giving up ground</li>
      <li>Seizing opportunities to change your standing or retreat</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Techniques'>
    <p>Basic</p>
    <ul>
      <li><Tip text='Ready'/></li>
      <li><Tip text='Retaliate'/></li>
      <li><Tip text='Seize a Position'/></li>
    </ul>
  </Header>
</Header>