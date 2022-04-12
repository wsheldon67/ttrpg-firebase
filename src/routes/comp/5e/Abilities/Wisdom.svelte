<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link stabilize and dying
</script>
<Header h={1} {start} {show} title='Wisdom'>
  <Header h={2} {start} title='Animal Handling'>
    <ul>
      <li>Calm an animal</li>
      <li>Intuit an animal's intentions</li>
      <li>Make a risky manuever on your mount</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Insight'>
    <ul>
      <li>Determine the true intentions of a creature</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Medicine'>
    <ul>
      <li><Tip text='Stabilize'/> a <Tip text='dying'/> creature</li>
      <li>Diagnose an illness</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Perception'>
    <ul>
      <li>Spot, hear, or otherwise detect</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Survival'>
    <ul>
      <li>Follow tracks or identify signs of creatures in the area</li>
      <li>Hunt wild game</li>
      <li>Navigate through wilderness</li>
      <li>Predict the weather</li>
      <li>Avoid natural hazards</li>
    </ul>
  </Header>
</Header>