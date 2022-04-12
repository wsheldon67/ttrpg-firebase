<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import ClimbSwimCrawl from '../Movement/ClimbSwimCrawl.svelte'
  import Tip from '../_Tip.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import DifficultTerrain from '../Movement/DifficultTerrain.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link attack of opportunity
</script>
<Header h={1} {start} {show} title='Movement'>
  <p>Move a distance up to your speed.</p>
  <ul>
    <li>Movement does not have to be <Tooltip tip='You can take actions in the middle of your movement.'>contiguous</Tooltip>.</li>
  </ul>
  <ClimbSwimCrawl start={start+1} show={false}/>
  <Header h={2} {start} show={false} title='Different Speeds'>
    <p>If you have more than one speed:</p>
    <ul>
      <li>You can switch back and forth between them.</li>
      <li>You cannot switch back to a speed that is "<Tooltip tip="The total distance you've moved is more than that speed.">used up</Tooltip>"</li>
    </ul>
  </Header>
  <DifficultTerrain start={start+1} show={false} />
  <Header h={2} {start} show={false} title='Being Prone'>
    <ul>
      <li>Dropping prone is free</li>
      <li>Standing up costs 1/2 of your speed</li>
    </ul>
    <p>See also <a href='/comp/5e/Conditions/Prone'>prone</a>.</p>
  </Header>
  <Header h={2} {start} show={false} title='Moving Around Other Creatures'>
    <ul>
      <li>Moving through another creature's space is considered difficult terrain.</li>
      <li>You cannot willing end your move on another creature's space.</li>
    </ul>
    <p>If the creature is hostile:</p>
    <ul>
      <li>You must be 2 sizes smaller or larger than it to move through its space.</li>
      <li>If you move out of its reach, you provoke an <Tip text='attack of opportunity'/>.</li>
    </ul>
  </Header>
</Header>