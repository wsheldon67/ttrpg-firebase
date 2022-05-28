<script lang='ts'>
  import type { Data } from "../../../../.svelte-kit/types/src/routes/character/atla/character";

  export let character:Data

</script>
<label>
  <input type='text' bind:value={character.connections[0]}/>
  takes issue with my methods - pherhaps they have a point, but I certainly can't admit that to them!
</label>
<label>
  <input type='text' bind:value={character.connections[1]}/>
  is my lodestar; something about them makes them the one person I let my guard down around.
</label>