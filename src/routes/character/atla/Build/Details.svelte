<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import Nav from "./_Nav.svelte";
import Next from "./_Next.svelte";

  
</script>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }

</style>
<Nav />
perhaps include scope, group focus, inciting incident
<div class='cont'>
  <label>
    <Tooltip tip="A one-sentence description of your character.">Concept:</Tooltip>
    <textarea></textarea>
  </label>
  <label>
    Name:
    <input type='text'/>
  </label>
</div>
<Next from='Playbook' to='Training'/>