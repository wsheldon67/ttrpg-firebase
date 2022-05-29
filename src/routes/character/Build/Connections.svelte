<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { playbook } from '$lib/data/playbooks'

  export let character:Data
  $: connections = playbook[character.playbook].connections

</script>
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