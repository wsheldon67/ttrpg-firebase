<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import SpeedByRace from './SpeedByRace.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Speed'>
  The distance in feet that a creature can walk in one round.
  <ul>
    <li>Determined by a creature's race.</li>
    <li>Represents short bursts of energetic movement in the midst of a life-threatening situation.</li>
  </ul>
  <SpeedByRace start={start+1} show={false}/>
</Header>