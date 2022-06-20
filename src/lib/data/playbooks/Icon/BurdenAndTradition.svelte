<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
import { onMount } from "svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const responsiblities = [
    `protecting humanity from natural disasters and dark spirits`,` 
    destroying dangerous creatures`,` overthrowing tyrants`,` serving and 
    defending rightful rulers`,` performing rituals`,` providing aid and succor 
    to the downtrodden`,` searching for hidden histories and artifacts`,` 
    guarding nature from threats and destruction`,` safekeeping records 
    and relics`
  ]
  const prohibitions = [
    `never refuse an earnest request for help`,` never express great 
    emotion`,` never run from a fight`,` never start a fight`,` never deny 
    someone knowledge or truth`,` never use your role for gain or profit`,` 
    never intervene in a community without invitation`,` never withhold 
    forgiveness`,` never steal or cheat `
  ]
  onMount(() => {
    if (character && !character.feature_settings.Responsibilities) {
      character.feature_settings.Responsibilities = responsiblities.map((text) => {
        return {text, checked: false}
      })
      character.feature_settings.Prohibitions = prohibitions.map((text) => {
        return {text, checked: false}
      })
    }
  })
</script>
<Header h={1} {start} {hide} title='Burden & Tradition'>
  <p>You are an icon of your burden and tradition.</p>
  {#if character}
    <p>Responsibilities:</p>
    <ul>
      {#each character.feature_settings.Responsibilities.filter(el => el.checked) as {text}}
        <li>{text}</li>
      {/each}
    </ul>
    <p>Prohibitions:</p>
    <ul>
      {#each character.feature_settings.Prohibitions.filter(el => el.checked) as {text}}
        <li>{text}</li>
      {/each}
    </ul>
    <Header h={2} {start} title='Choose Options' hide>
      <p>Choose 3 responsibilities of your burden and tradition that your are expected to assume:</p>
      <div class='cont'>
        {#each character.feature_settings.Responsibilities as {text, checked}}
          <label>
            <input type='checkbox' bind:checked={checked} />
            {text}
          </label>
        {/each}
      </div>
      <p>Choose 3 phrohibitions of your burden and tradition:</p>
      <div class='cont'>
        {#each character.feature_settings.Prohibitions as {text, checked}}
          <label>
            <input type='checkbox' bind:checked={checked} />
            {text}
          </label>
        {/each}
      </div>
    </Header>
  {:else}
    <p>Choose 3 responsiblities of your burden and tradition that you are expected to assume:</p>
    <ul>
      {#each responsiblities as responsibility}
        <li>{responsibility}</li>
      {/each}
    </ul>
    <p>Choose 3 prohibitions of your burden and tradition:</p>
    <ul>
      {#each prohibitions as prohibition}
        <li>{prohibition}</li>
      {/each}
    </ul>
  {/if}
  <Header h={2} {start} title='Live Up To Your Role' hide>
    <p><Tip text='Live up to your principle'/> of Role through the responsibilities of your burden and tradition despite opposition or danger.</p>
    <ul>
      <li><Tip text='shift your balance'/> toward Role instead of marking <Tip text='fatigue'/></li>
      <li>Clear fatigue equal to your Role (minimum 0)</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Break Tradition' hide>
    <p>Directly and openly break a prohibition of your burden and tradition.</p>
    <ul>
      <li>Mark a <Tip text='condition'/></li>
      <li>Shift your balance towards Freedom</li>
      <li>Mark <Tip text='growth'/></li>
    </ul>
  </Header>
  <Header h={2} {start} title='End of Session' hide>
    <p>Answer these after your standard growth questions:</p>
    <p>Did I uphold a responsibility?</p>
    <ul><li>If yes, shift balance toward Role and clear a condition.</li></ul>
    <p>Did I break a prohibition?</p>
    <ul>
      <li>If yes, shift balance toward Freedom. Underline one prohibition you broke during the session.</li>
      <li>If it's already underlined, cross it out - it doesn't mean anything to you to break it again.</li>
    </ul>
  </Header>
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>