<script lang='ts'>
  import FullResult from "$lib/c/FullResult.svelte"
  import Header from "$lib/c/Header.svelte"
  import Tip from "$lib/c/Tip.svelte"
  import type { Data } from "$lib/data/character"
  import { trainings } from "$lib/data/trainings"
  import Techniques from '../../../../routes/character/Build/Techniques.svelte';

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  let options = [
    {text: `Your Unity principle is > 0`, checked: false},
    {text: `You have studied this technique before`, checked: false},
    {text: `Someone has used this technique against you in real battle.`, checked: false}
  ]
</script>
<Header h={1} {start} {hide} title='Double Heritage'>
  <p>You are a child of two cultures. At character creation:</p>
  <ul>
    <li>Choose two trainings and two backgrounds that represent your two heritages.</li>
    <li>Start play with two mastered techniques instead of one.</li>
  </ul>
  {#if character}
    <label>
      Second Training:
      <select bind:value={character.trainings[1]}>
        {#each trainings.filter(el => el !== character.trainings[0]) as training}
          <option>{training}</option>
        {/each}
      </select>
    </label>
  {/if}
  <Header h={2} {start} title='Wisdom From Many Places' hide>
    <p>Study with a master to learn techniques from any training and adapt them to your own. Check all that apply:</p>
    <div class='cont'>
      {#each options as {text, checked}}
        <label>
          <input type='checkbox' bind:checked={checked} />
          {text}
        </label>
      {/each}
    </div>
    <p>Roll with +{options.filter(el => el.checked).length}:</p>
    <FullResult>
      <tr>
        <td rowspan="2">You must find a new master to continue your training.</td>
        <td colspan="2">You learn the technique; <Tip text='shift your balance'/> toward Unity</td>
      </tr>
      <tr>
        <td>Mark a <Tip text='condition'/> and write its name by the technique. You can't use this technique if you have that condition marked. When you master the technique, erase the condition's name.</td>
      </tr>
    </FullResult>
    <p>Techniques from a 2nd bending are adapted to your bending.</p>
    {#if character}
    <Header h={3} {start} title='Choose Techniques'>
      <Techniques bind:character={character} hide_limit all_trainings/>
    </Header>
    {/if}
  </Header>
  <Header h={2} {start} title='Cultural Bonds' hide>
    <p>Try to connect with an NPC via shared culture. Roll with Heritage:</p>
    <FullResult>
      <tr>
        <td>The NPC mocks you or gets offended by your slip. Mark a <Tip text='condition'/> and <Tip text='shift your balance'/> away from Heritage.</td>
        <td>Choose 1 option</td>
        <td>Choose 2 options</td>
      </tr>
    </FullResult>
    <p>Options:</p>
    <ul>
      <li>They accept you; they cease hostilities or antagonism toward you.</li>
      <li>They grow to like you (if they already accept you); they agree to help you with a problem.</li>
      <li>They reveal their background; you learn their <Tip text='principle'/>.</li>
      <li>They offer solace; you clear a condition.</li>
      <li>They reveal vulnerability; you become <Tip text='Prepared'/> to deal with them.</li>
    </ul>
  </Header>
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>