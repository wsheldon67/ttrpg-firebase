<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  let current_effect:string

  function remove(name:string) {
    character.bonuses = character.bonuses.filter(el => el.name !== name)
  }
  function add_effect() {
    const effect = {source: 'player entry', name: current_effect}
    character.bonuses = [effect, ...character.bonuses]
    current_effect = ''
  }
</script>
<Header h={1} {start} {hide} title='Temporary Notes'>
  <form on:submit|preventDefault={add_effect}>
    <label>
      <Tooltip tip='Usually in the form "+1 ongoing to prevent otter-bearpox", but can be any text.'>Add an effect</Tooltip>:
      <input bind:value={current_effect} />
    </label>
  </form>
  <div class='cont'>
    {#each character.bonuses as {name, source}}
      <button on:click={()=>{remove(name)}}>X</button>
      <p><Tooltip tip={'From ' + source}>{name}</Tooltip></p>
    {/each}
  </div>
  <Header h={2} {start} title='Personal Notes'>
    <textarea bind:value={character.feature_settings.notes}></textarea>
  </Header>
</Header>

<style>
  .cont {
    display: grid;
    grid-template-columns: 1.5em auto;
  }
  textarea {
    width: 100%;
    min-height: 6em;
  }
</style>