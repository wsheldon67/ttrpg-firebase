<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Acrobatics from './Acrobatics.svelte'
  import SleightOfHand from './SleightOfHand.svelte'
  import Stealth from './Stealth.svelte'

  export let start: number = 1
  export let show: boolean = true
  
  let low = start + 1
</script>
<Header h={1} {start} {show} title='Dexterity'>
  <Acrobatics start={low} />
  <SleightOfHand start={low} />
  <Stealth start={low} />
  <Header h={2} {start} title='Other'>
    <ul>
      <li>Move nimbly, quickly or quietly</li>
      <li>Steer or control a vehicle</li>
      <li>Pick a lock</li>
      <li>Disable a trap</li>
      <li>Securely tie up a prisoner</li>
      <li>Wiggle free of bonds</li>
      <li>Play a stringed instrument</li>
      <li>Craft a small or detailed object</li>
    </ul>
  </Header>
</Header>