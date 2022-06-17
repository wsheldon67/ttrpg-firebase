<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
  import { onMount } from "svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const ideals = [
    `Always speak the truth`, `Always stand up to bullies`, `Always keep your promises`,
    `Never strike the first blow`, `Never deny a request for help`, `Never leave a friend behind`
  ]
  onMount(() => {
    if (character) {
      if (!character.feature_settings.Ideals) {
        character.feature_settings.Ideals = new Array(3)
      }
      if (!character.feature_settings.Allies) {
        character.feature_settings.Allies = []
      }
    }
  })
  function add_ally() {
    character.feature_settings.Allies = ['',...character.feature_settings.Allies]
  }
  function remove_ally(index) {
    const allies = character.feature_settings.Allies
    character.feature_settings.Allies = [
      ...allies.slice(0, index),
      ...allies.slice(index+1, allies.length)
    ]
  }
</script>
<Header h={1} {start} {hide} title='Never Turn My Back'>
  <p>You've seen sadness and grief. You're no stranger to loss and pain. But you know the world can be a better place. And nothing happens without good people fighting for what's right...</p>
  <Header h={2} {start} title='Ideals'>
    <p>You have a code - choose three ideals to define it:</p>
    {#if character}
      <div class='col'>
        {#each character.feature_settings.Ideals as ideal}
          <select bind:value={ideal}>
            {#each ideals as text}
              <option disabled={character.feature_settings.Ideals.includes(text)}>{text}</option>
            {/each}
          </select>
        {/each}
      </div>
    {:else}
      <ul>
        {#each ideals as text}
          <li>{text}</li>
        {/each}
      </ul>
    {/if}
    <p>When you live up to your ideals at a significant cost, an NPC who witnessed or heard about your sacrifice approaches to affirm their allegiance to your group's purpose. Record their name as an <strong>ally</strong>.</p>
  </Header>
  <Header h={2} {start} title='Allies'>
    {#if character}
      <div class='allies'>
        {#each character.feature_settings.Allies as ally, index}
          <input bind:value={ally} />
          <button on:click={()=>{remove_ally(index)}}>Remove</button>
        {/each}
        <button class='p' on:click={add_ally}>Add Ally</button>
      </div>
    {/if}
    <ul>
      <li>Allies always care what you think when you <Tip text='plead'/> with them.</li>
      <li>Allies always open up to you when you <Tip text='guide and comfort'/> them.</li>
      <li>You can call on an ally to <Tip text='live up to their principle'/> as if you had rolled a 10+ by removing their name from your list of allies.</li>
    </ul>
  </Header>
</Header>
<style>
  .col {
    display: flex;
    flex-direction: column;
  }
  .col > select {
    width: min-content;
  }
  .allies {
    display: grid;
    grid-template-columns: min-content 4em;
  }
</style>