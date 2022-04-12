<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import AttackOrder from './AttackOrder.svelte'
  import Hit from './Hit.svelte'
  import Visibility from './Visibility.svelte'

  export let start: number = 1
  export let show: boolean = true

  let finesse:boolean = false
  let thrown:boolean = false
  let proficient:boolean = true

  function roll_text(finesse:boolean, thrown:boolean, proficient:boolean):string {
    let res = 'd20 + '
    let ability = 'dex '
    if (finesse) {
      ability = '[str or dex] '
    } else if (thrown) {
      ability = 'str '
    }
    res += ability
    if (proficient) {res += '+ prof'}
    return res
  }

</script>
<Header h={1} {start} {show} title='Ranged Attack'>
  <AttackOrder />
  <Visibility start={start+1} show={false} />
  <Header h={2} {start} title='Range'>
    <p>Ranged weapons have one or two ranges listed.</p>
    <ul>
      <li>If there are two, the smaller is the normal range, the larger is the max.</li>
      <li>If there is one, the normal and max ranges are the same.</li>
    </ul>
    <p>You cannot attack further than your max range.</p>
    <ul>
      <li>Attack further than your normal range have <Tip text='disadvantage'/>.</li>
      <li>Attacks made within 5' of a hostile creature have disadvantage.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Attack Roll'>
    <details>
      <summary>Weapon Details</summary>
      <label>
        <input type='checkbox' bind:checked={finesse}/>Finesse
      </label>
      <label>
        <input type='checkbox' bind:checked={thrown}/>Thrown
      </label>
      <label>
        <input type='checkbox' bind:checked={proficient}/>Proficient
      </label>
    </details>
    <Hit />
    <p>Your ranged attack roll with a 
      {#if thrown}
        thrown 
      {/if}
      {#if finesse}
        finesse 
      {/if}
        weapon 
      {#if proficient}
        that you are proficient in 
      {/if}
        is: {roll_text(finesse, thrown, proficient)}.
    </p>
  </Header>
  <Header h={2} {start} title='Damage Roll'>
    <p>Roll the damage dice listed on the weapon, and add 
      {#if finesse}
        the same modifier you chose for your attack roll.
      {:else if thrown}
        your strength modifier.
      {:else}
        your dexterity modifier.
      {/if}
    </p>
  </Header>
</Header>