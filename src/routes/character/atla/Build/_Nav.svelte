<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";


</script>
<style>
  div {
    display: flex;
    flex-direction: row;
    background-color: var(--b1);
  }
  button {
    background-color: var(--b2);
  }
</style>
<div>
  <button><Tooltip tip='Playbook' block>P</Tooltip></button>>
  <button><Tooltip tip='Concept' block>C</Tooltip></button>
</div>