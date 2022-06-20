<script lang='ts'>
  import Fatigue from "$lib/c/Fatigue.svelte";
import FullResult from "$lib/c/FullResult.svelte";
import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
import { onMount } from "svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  export let id:string = null

  $: excellence = character ? -character.balance >= 1 : null
  $: community = character ? character.balance >= 0 : null

  onMount(() => {
    if (character) {
      if (!character.feature_settings.areas) {
        character.feature_settings.areas = new Array(2)
      }
    }
  })
  const areas = [`Shaping`, `Maneuvering`, `Breaking`, `Sensing`, `Forcing`, `Guarding`]
</script>
<Header h={1} {start} {hide} title='Extraordinary Skill'>
  <p>You aren't just capable in your area of skill and training; you're astonishing.</p>
  <ul>
    <li>Start play with one additional mastered technique. <a href={`/character/technique-${id}`}>Choose Technique</a></li>
  </ul>
  <p>Choose two areas in which your mastery is particularly impressive:</p>
  {#if character}
    {#each character.feature_settings.areas as area}
      <select bind:value={area}>
        <option>-</option>
        {#each areas as text}
          <option>{text}</option>
        {/each}
      </select>
    {/each}
  {:else}
    <ul class='list'>
      {#each areas as text}
        <li>{text}</li>
      {/each}
    </ul>
  {/if}
  <Header h={2} {start} title='Use Your Mastery' hide>
    <p>Ignore penalties from <Tip text='conditions'/> or <Tip text='statuses'/> when you:</p>
    <ul>
      <li><Tip text='Rely on your skills and training'/></li>
      <li>Use the <Tip text='stance move'/></li>
      <li>Or otherwise trigger a move while using your mastery</li>
    </ul>
    {#if character}
      <label>
        <input type='checkbox' bind:checked={character.feature_settings.ignore_penalties}/>
        I am using my mastery, ignore penalties
      </label>
    {/if}
  </Header>
  <Header h={2} {start} title='Learn Through Observation' hide>
    <p>Watch someone use an unkown technique that is available to your skills and training:</p>
    <ul>
      <li>Mark <Tip text='fatigue'/></li>
      <li><Tip text='Shift your balance'/> towards Excellence</li>
      <li>Take the technique as <Tip text='learned'/></li>
    </ul>
    <p>You can only do this if your balance is at +1 Excellence or higher.</p>
    {#if excellence}
      <p><a href={`/character/technique-${id}`}>Choose Technique</a></p>
    {/if}
    <p>Note: you must still get a mastery condition from a master in order to master this technique.</p>
  </Header>
  <Header h={2} {start} title='Learn From a Master' hide>
    <div slot='header' class='buttons'>
      {#if character && excellence}
        <Fatigue bind:character={character} />
        <button class='p' on:click={()=>{character.balance--}}>+Excellence</button>
      {/if}
    </div>
    <p>Study with a teacher to learn a new technique.</p>
    <ul>
      <li><Tip text='Shift your balance'/> toward Community</li>
      <li>Learn the technique at the <Tip text='practiced'/> level</li>
    </ul>
    <p>You can only do this if your balance is at +0 Community or higher.</p>
    {#if community}
      <p><a href={`/character/technique-${id}`}>Choose Technique</a></p>
    {/if}
  </Header>
  <Header h={2} {start} title='Teach a Companion' hide>
    <div slot='header' class='buttons'>
      {#if character && community}
        <button class='p' on:click={()=>{character.balance++}}>+Community</button>
      {/if}
    </div>
    <p>Spend time teaching a fellow companion a technique available to their skills and training. Roll Community:</p>
    <FullResult>
      <tr>
        <td rowspan="2">You get too frustrated with their inadequacies; both of you suffer 2 <Tip text='conditions'/>; you can never try to teach them this technique again.</td>
        <td colspan="2">They learn the technique.</td>
      </tr>
      <tr>
        <td>You get impatient or frustrated; Take 2 conditions or inflict 2 conditions on them.</td>
      </tr>
    </FullResult>
  </Header>
</Header>