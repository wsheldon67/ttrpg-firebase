<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import AttackOrder from './AttackOrder.svelte'
  import Hit from './Hit.svelte'
  import Visibility from './Visibility.svelte'

  export let start: number = 1
  export let show: boolean = true

  let finesse: boolean = false
  let proficient: boolean = true

  function roll_text(finesse:boolean, proficient:boolean):string {
    const texts = {
      'truetrue': `a finesse weapon you are proficient in is: d20 + [str or dex] + prof`,
      'truefalse': `a finesse weapon you are not proficient in is: d20 + [str or dex]`,
      'falsetrue': `a weapon you are proficient in is: d20 + str + prof`,
      'falsefalse': `a weapon you are not proficient in is: d20 + str`
    }
    const key = finesse.toString() + proficient.toString()
    return texts[key]
  }
</script>
<Header h={1} {start} {show} title='Melee Attack'>
  <p>You can attack targets within your <Tip text="reach" path='Combat/Reach'/>.</p>
  <AttackOrder />
  <Header h={2} {start} title='Two Weapons' show={false}>
    <p>When you are using a light melee weapon in each hand:</p>
    <ul>
      <li>You may use your bonus action to attack with your 2nd hand.</li>
      <li>The bonus attack only adds your ability modifier if it is negative.</li>
    </ul>
  </Header>
  <Header h={2} {start} show={false} title='Knock Unconcioius'>
    <p>When you reduce a creature to 0 HP, you may choose to knock it <Tip text='unconcious'/> instead of killing it.</p>
  </Header>
  <Visibility start={start+1} show={false}/>
  <Header h={2} {start} title='Attack Roll'>
    <details>
      <summary>Weapon Details</summary>
      <label>
        <input type='checkbox' bind:checked={finesse}/>Finesse
      </label>
      <label>
        <input type='checkbox' bind:checked={proficient}/>Proficient
      </label>
    </details>
    <Hit />
    <p>The melee attack roll for {roll_text(finesse, proficient)}</p>
  </Header>
  <Header h={2} {start} title='Damage Roll'>
    <p>Roll the damage dice listed on the weapon, and add 
      {#if finesse}
        the same modifier you chose for your attack roll.
      {:else}
        your strength modifier.
      {/if}
    </p>
  </Header>
</Header>