<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import AttackRoll from './AttackRoll.svelte'
  import Visibility from './Visibility.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link normal range
</script>
<Header h={1} {start} {show} title='Attack'>
  <ol>
    <li>Choose a target</li>
    <li>Determine modifiers from cover, advantages, effects, and abilities</li>
    <li>Make an attack roll</li>
    <li>If you hit, apply damage and effects</li>
  </ol>
  <Visibility start={start+1} show={false} />
  <Header h={2} {start} title='Ranged Attack Distance' show={false}>
    <p>Ranged attacked have <Tip text='disadvantage'/> if:</p>
    <ul>
      <li>The target is further than the weapon's <Tip text='normal range'/></li>
      <li>There is a hostile creature within 5'</li>
    </ul>
  </Header>
  <AttackRoll start={start+1} />
</Header>