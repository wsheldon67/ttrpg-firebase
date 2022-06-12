<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import Tip from '$lib/c/Tip.svelte'
  import { onMount } from 'svelte';
  import Scale from '$lib/c/Scale.svelte';
  
  export let start: number = 1
  export let character:Data
  export let details:string[]
  export let signs:string[]

  onMount(() => {
    if (!character.feature_settings.DestinyDetails){
      character.feature_settings.DestinyDetails = details.map((detail) => {
        return {name: detail, blank: ''}
      })
      character.feature_settings.DestinyTrack = 0
      character.feature_settings.DestinySigns = signs.map((sign) => {
        return {name: sign, marked: false}
      })
    }
  })
</script>
<Header h={2} {start} title='Destiny Track'>
  <Scale
    bind:value={character.feature_settings.DestinyTrack}
    min={0} max={5}
  />
  {#if character.feature_settings.DestinyTrack >= 5}
    <button class='p' on:click={()=>{character.feature_settings.DestinyTrack = 0}}>Clear</button>
    your destiny track and take a destiny sign.
  {/if}
  <p>Whenever you <Tip text='lose your balance'/>, get <Tip text='taken out'/>, or are otherwise instructed to, mark your Destiny Track.</p>
  <ul>
    <li>There are 5 slots on the destiny track.</li>
    <li>When your destiny track fills, clear it and take a destiny sign.</li>
    <li>If you have already taken the other four, you must take "meet your fate".</li>
  </ul>
</Header>
<Header h={2} {start} title='Destiny Details' hide>
  <p>Fill these in as your destiny is revealed to you, either in visions or through the insights of spiritually attuned NPCs.</p>
  <ul>
    {#each character.feature_settings.DestinyDetails as {name, blank}}
      <li>
        <label>
          {name}
          <input bind:value={blank} />
        </label>
      </li>
    {/each}
  </ul>
  <p>When you act to bring about one of these details, you may <Tip text='live up to your principle'/> of Determination without marking <Tip text='fatigue'/>.</p>
  <p>When you and the GM agree one of the details is fully explored or fulfilled, mark <Tip text='growth'/>.</p>
</Header>
<Header h={2} {start} title='Destiny Signs' hide>
  <table>
    <tr>
      <td>
        <input type='checkbox' bind:checked={character.feature_settings.DestinySigns[0].marked} />
        Otherworldly Visions
      </td>
      <td>Mark your destiny track to have a vision about the situation at hand. Ask the GM one question and get an honest answer</td>
    </tr>
    <tr>
      <td>
        <input type='checkbox' bind:checked={character.feature_settings.DestinySigns[1].marked} />
        Tremble Before Me
      </td>
      <td>Mark your destiny track and reveal a glimpse of your otherworldly aspect to <Tip text='intimidate'/> an NPC as if you rolled a 10+. Afterward, their 
        fear and mistrust of you knows no bounds; you cannot <Tip text='guide and comfort'/> or 
        <Tip text='plead'/> with that NPC until you have earned their trust.</td>
    </tr>
    <tr>
      <td>
        <input type='checkbox' bind:checked={character.feature_settings.DestinySigns[2].marked} />
        Self-sacrificing
      </td>
      <td>Once per scene, mark your destiny track to supernaturally 
        absorb an incoming blow aimed at an ally within view; cancel all <Tip text='fatigue'/>, <Tip text='conditions'/>, or <Tip text='balance shifts'/> that would have been inflicted.</td>
    </tr>
    <tr>
      <td>
        <input type='checkbox' bind:checked={character.feature_settings.DestinySigns[3].marked} />
        Inner Strength
      </td>
      <td>Once per session, mark destiny twice to clear all conditions.</td>
    </tr>
    <tr>
      <td>
        <input type='checkbox' bind:checked={character.feature_settings.DestinySigns[4].marked} />
        Meet Your Fate
      </td>
      <td>Your destiny arrives and you are changed utterly by it. If you 
        survive in human form, change playbooks.</td>
    </tr>
  </table>
</Header>