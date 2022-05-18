<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte";

  export let character

</script>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>
perhaps include scope, group focus, inciting incident
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