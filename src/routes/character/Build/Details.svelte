<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte";

  export let character

  // TODO perhaps include scope, group focus, inciting incident
</script>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>
<p>Choose a character concept and name for your character.</p>
<p>Auto-save is enabled once your character has a name.</p>
<div class='cont'>
  <label>
    <Tooltip tip="A one-sentence description of your character.">Concept:</Tooltip>
    <textarea
      bind:value={character.concept}
    ></textarea>
  </label>
  <label>
    Name:
    <input
      type='text'
      bind:value={character.name}
    />
  </label>
</div>