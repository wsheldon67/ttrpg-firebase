<script lang='ts'>
import type { Data } from "$lib/data/character";
import Header from "$lib/c/Header.svelte";
import { onMount } from "svelte";
import Tip from "$lib/c/Tip.svelte";

  export let character:Data
  export let drives:string[]
  export let start:number
  $: settings = character?.feature_settings?.LegacyOfExcellence
  $: marked = settings.filter(el => el.marked).length
  $: max = (Math.floor(marked / 4) + 1) * 4

  onMount(() => {
    if (character) {
      if (!character.feature_settings.LegacyOfExcellence) {
        character.feature_settings.LegacyOfExcellence = []
      }
    }
  })
  function check(text:string) {
    if (settings.some(el => el.text === text)) {
      character.feature_settings.LegacyOfExcellence = settings.filter(el => el.text !== text)
    } else if (settings.length < max) {
      character.feature_settings.LegacyOfExcellence = [...settings, {text, marked: false}]
    } else {
      character.feature_settings.LegacyOfExcellence[max - 1] = {text, marked: false}
    }
    drives = drives
  }
  function is_checked(text:string):boolean {
    return settings.some(el => el.text === text)
  }
</script>
<Header h={2} {start} title='Drives'>
  <p>Take <Tip text='growth'/> or clear a <Tip text='condition'/> for every completed drive.</p>
  <div class='cont'>
    {#each character.feature_settings.LegacyOfExcellence as {text, marked} (text)}
      <label>
        <input type='checkbox' bind:checked={marked} />
        {text}
      </label>
    {/each}
  </div>
</Header>
<Header h={2} {start} title={`Choose Drives (${settings.length}/${max})`} hide>
  <div class='cont'>
  {#each drives as text}
    <label>
      <input type='checkbox' on:input={()=>{check(text)}} checked={is_checked(text)}/>
      {text}
    </label>
  {/each}
  </div>
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>