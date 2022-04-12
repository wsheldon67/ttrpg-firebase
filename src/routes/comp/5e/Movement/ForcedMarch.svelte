<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Forced March'>
  <ul>
    <li>A creature can sustain travel up to 1/3 of the time (8h of a 24h day).</li>
    <li>For each additional hour, make a Con save against 10 + [number of additional hours].</li>
    <li>On failure, suffer one level of <Tip text='exhaustion' path='Conditions/Exhaustion'/>.</li>
  </ul>
</Header>