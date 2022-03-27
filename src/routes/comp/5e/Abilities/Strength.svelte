<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Athletics from './Athletics.svelte'
  import CarryingCapacity from './CarryingCapacity.svelte'

  export let start: number = 1
  export let show: boolean = true
  
  let low = start + 1
</script>
<Header h={1} {start} {show} title='Strength'>
  <Athletics start={low} />
  <Header h={2} {start} title='Other'>
    <ul>
      <li>Lift, push, pull or break something</li>
      <li>Force your body through a space</li>
      <li>Any task that requires applying brute force to a situation</li>
    </ul>
  </Header>
  <CarryingCapacity start={low} />
</Header>