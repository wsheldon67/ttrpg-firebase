<script lang='ts'>
  import FullResult from "$lib/c/FullResult.svelte";
import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
import { onMount } from "svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const habits = [
    `Casual thievery and pickpocketing`, `Vandalism or sabotage`, `Trespassing`,
    `Daredevil stunts`, `"Charming" insults of dangerous people`,
    `Cons`, `Rabble-rousing`, `Gambling`
  ]
  onMount(() => {
    if (character) {
      if (!character.feature_settings.habits) {
        character.feature_settings.habits = new Array(4)
      }
    }
  })
</script>
<Header h={1} {start} {hide} title='Bad Habits'>
  <p>You've picked up some bad habits over the years. Pick 4 bad habits you indulge:</p>
  {#if character}
    {#each character.feature_settings.habits as habit}
      <select bind:value={habit}>
        {#each habits.filter(el => !character.feature_settings.habits.includes(el) || el === habit) as text}
          <option>{text}</option>
        {/each}
      </select>
    {/each}
  {:else}
  <ul>
    {#each habits as habit}
      <li>{habit}</li>
    {/each}
  </ul>
  {/if}
  <Header h={2} {start} title='Indulge Alone' hide>
    <p>Indulge a bad habit on your own:</p>
    <ul>
      <li><Tip text='Shift your balance'/> toward Survival.</li>
      <li>Roll with Survival</li>
    </ul>
    <FullResult>
      <tr>
        <td rowspan="2">You're caught by someone dangerous or powerful, and they complicate your life.</td>
        <td colspan="2">You pull it off and vent your frustrations. Clear <Tip text='fatigue'/> or <Tip text='conditions'/> equal to your Survival (min. 0). If you have no fatigue or conditions, mark growth.</td>
      </tr>
      <tr>
        <td></td>
        <td>You also gain a windfall, a boon or opportunity.</td>
      </tr>
    </FullResult>
  </Header>
  <Header h={2} {start} title='Indulge With Friends' hide>
    <p>Indulge a bad habit with a friend:</p>
    <ul>
      <li><Tip text='Shift your balance'/> toward Friendship</li>
      <li>Roll with Friendship</li>
    </ul>
    <FullResult>
      <tr>
        <td rowspan="2">Something goes terribly awry; you can either take the heat yourself, or shift your balance twice toward Survival and leave your friend in the lurch.</td>
        <td colspan="2">You and your friend pull it off and grow closer; each of you makes the other <Tip text='inspired'/>.</td>
      </tr>
      <tr>
        <td></td>
        <td>You also obtain some useful resource or information, and become <Tip text='prepared'/>.</td>
      </tr>
    </FullResult>
  </Header>
</Header>
<style>
  select {
    display: block;
  }
</style>