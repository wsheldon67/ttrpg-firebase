<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { playbook } from '$lib/data/playbooks'

  export let character:Data
  $: connections = playbook[character.playbook].connections

</script>
<h1>Connections</h1>
<p>After player introductions, take turns choosing one of your connections and offering it to another player. If they agree, record their name in the relevant space.</p>
<label>
  {connections[0][0]}
  <input type='text' bind:value={character.connections[0]}/>
  {connections[0][1]}
</label>
<label>
  {connections[1][0]}
  <input type='text' bind:value={character.connections[1]}/>
  {connections[1][1]}
</label>
{#if character.name}
  <p>Your character has been saved. You can view or edit your character by selecting their <a href='/comp/character/select'>character sheet</a>.</p>
{:else}
  <p>Your character will be saved when you give it a name.</p>
{/if}
<label>
  Name:
  <input bind:value={character.name} />
</label>
<style>
  p {
    margin: 1em .5em;
  }
</style>