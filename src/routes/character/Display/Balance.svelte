<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte";
  import type { Data } from "$lib/data/character";
  import { playbook } from "$lib/data/playbooks";
  import { signed } from "$lib/pretty";

  export let character:Data
  $: center = character.center
  $: principles = playbook[character.playbook].principles

  const options = [-3,-2,-1,0,1,2,3]
  const r_options = options.slice().reverse()
</script>
<div class='cont'>
  <div class='principle_label top'>
    <Tooltip tip={principles[0].text}>{principles[0].name}: {signed(-character.balance)}</Tooltip>
  </div>
  <div class='range_cont'>
    <div class='top range_label'>
      {#each r_options as v}
        <button class:swap_text={v < 0} class:center={center === -v} on:click={()=>character.center = -v}>
          {signed(v)}
        </button>
      {/each}
    </div>
    <input type='range' min='-3' max='3' bind:value={character.balance}/>
    <div class='bottom range_label'>
      {#each options as v}
        <button class:swap_text={v >= 0} class:center={center === v}  on:click={()=>character.center = v}>
          {signed(v)}
        </button>
      {/each}
    </div>
  </div>
  <div class='principle_label bottom'>
    <Tooltip tip={principles[1].text}>{principles[1].name}: {signed(character.balance)}</Tooltip>
  </div>
</div>

<style>
  .range_cont {
    width: 100%;
    padding: 0em 1em;
    box-sizing: border-box;
  }
  .range_label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .range_label > button {
    width: 1.5em;
  }
  .range_label > button:hover {
    box-shadow: 0em 0em 2em 1em var(--p);
  }
  input {
    width: 100%;
  }
  .principle_label {
    padding: 0em 1em;
  }

  .principle_label.bottom {
    text-align: right;
  }
  .principle_label :global(span) {
    text-decoration: none;
    font-weight: bold;
    letter-spacing: .2rem;
  }
  .principle_label.bottom :global(span) {
    color: var(--at);
  }
  .cont {
    background: linear-gradient(to right, var(--b1), var(--t));
  }
  .swap_text {
    color: var(--at);
  }
  .center {
    box-shadow: 0em 0em 2em 1em var(--p);
  }
</style>