<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link dash, disengage, dodge
</script>
<Header h={1} {start} {show} title='Mounted Combat'>
  <Header h={2} {start} title='Mounting'>
    <p>You can mount a creature that:</p>
    <ul>
      <li>Is at least one size larger</li>
      <li>Is willing</li>
      <li>Has the appropriate anatomy</li>
      <li>Is within 5' of you</li>
    </ul>
    <p>Mounting or dismounting uses 1/2 of your movement speed.</p>
  </Header>
  <Header h={2} {start} title='Falling'>
    <p>Make a DC Dexterity Saving Throw if:</p>
    <ul>
      <li>An effect moves your mount against its will</li>
      <li>You are knocked <Tip text='prone'/></li>
    </ul>
    <p>Failure = fall off, land prone within 5'</p>
    <hr/>
    <p>If your mount is knocked prone you can:</p>
    <ul>
      <li>Use your reaction to land on your feet</li>
      <li>Fall prone within 5'</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Controlled'>
    <p>A trained mount can be controlled. A controlled mount has the same initiative as you. You can direct it to:</p>
    <ul>
      <li><Tip text='Dash'/></li>
      <li><Tip text='Disengage'/></li>
      <li><Tip text='Dodge'/></li>
    </ul>
  </Header>
  <Header h={2} {start} title='Independent'>
    <p>Untrained or allowed to act independently.</p>
    <ul>
      <li>Keeps its own initiative</li>
      <li>Its actions are not restricted due to bearing a rider</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Opportunity Attack'>
    <p>Can target either rider or mount.</p>
  </Header>
</Header>