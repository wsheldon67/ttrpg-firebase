<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Attack from '../Combat/Attack.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link spells
  // TODO link concentration
</script>
<Header h={1} {start} {show} title='Simple Actions'>
  <Header h={2} {start} show={false} title='Dash'>
    <p>Double your speed (after applying modifiers)</p>
  </Header>
  <Header h={2} {start} show={false} title='Disengage'>
    <p>Move without provoking an <Tip text='attack of opportunity'/>.</p>
  </Header>
  <Header h={2} {start} show={false} title='Dodge'>
    <p>Until the start of your next turn:</p>
    <ul>
      <li>Attack rolls against you have disadvantage (as long as you can see the attacker)</li>
      <li>Make dexterity saving throws with advantage</li>
    </ul>
    <p>You lose these benefits if your speed is 0 or you are <Tip text='incapacitated'/></p>
  </Header>
  <Header h={2} {start} show={false} title='Help'>
    <p>Give another creature advantage:</p>
    <ul>
      <li>On a predetermined task</li>
      <li>To attack a creature that is within 5' of you</li>
    </ul>
  </Header>
  <Header h={2} {start} show={false} title='Hide'>
    //TODO compile p192, chpt 7 - hiding, Unseen Attackers & Targets chp 9
  </Header>
  <Header h={2} {start} show={false} title='Ready'>
    <p>Schedule an action to occur on a trigger before your next turn.</p>
    <ul>
      <li>Counts as your reaction for the round</li>
      <li>Can choose to ignore trigger to save your reaction</li>
      <li>Readying a spell requires maintaining <Tip text='concentration'/></li>
    </ul>
  </Header>
  <Header h={2} {start} show={false} title='Search'>
    <p>Look for something. May use <a href='/comp/5e/Abilities/Wisdom'>perception</a> or <a href='/comp/5e/Abilities/Intelligence'>investigation</a>.</p>
  </Header>
  <Header h={2} {start} show={false} title='Use an Object'>
    <p>Interact with more than one object or use an object that requires an action.</p>
  </Header>
</Header>