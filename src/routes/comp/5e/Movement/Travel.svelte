<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Distance from './Distance.svelte'
  import ForcedMarch from './ForcedMarch.svelte'
  import Time from './TravelTime.svelte'
  import Vehicles from './Vehicles.svelte'

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
  <ForcedMarch start={low} show={false} />
  <Vehicles start={low} show={false} />
</Header>