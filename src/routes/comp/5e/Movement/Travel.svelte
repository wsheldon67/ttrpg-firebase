<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Distance from './Distance.svelte'
  import Time from './TravelTime.svelte'

  export let start: number = 1
  export let show: boolean = true
  const low = start + 1

</script>
<Header h={1} {start} {show} title='Travel'>
  <ul>
    <li>The distance that a creature can walk over longer periods of time.</li>
  </ul>
  <Distance start={low} show={false} />
  <Time start={low} show={false} />
  <Header h={2} {start} show={false} title='Difficult Terrain'>
    <ul>
      <li>Dense forests, deep swamps, rubble-filled ruins, steep mountains, ice-covered ground, etc.</li>
      <li>Move at half speed</li>
    </ul>
  </Header>
  <Header h={2} {start} show={false} title='Forced March'>
    <ul>
      <li>A creature can sustain travel up to 1/3 of the time (8h of a 24h day).</li>
      <li>For each additional hour, make a Con save against 10 + [number of additional hours].</li>
      <li>On failure, suffer one level of <Tip text='exhaustion' path='Conditions/Exhaustion'/>.</li>
    </ul>
  </Header>
</Header>