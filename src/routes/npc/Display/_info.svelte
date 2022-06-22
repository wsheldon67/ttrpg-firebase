<script lang='ts'>
import type { NPC } from "$lib/data/npc";


  export let npc:NPC
</script>
<p>{npc.name} {npc.feature}</p>
<p>Drive: {npc.drive}</p>
<p>Hopes: {npc.hopes}</p>
<p>Fears: {npc.fears}</p>
<p>Description:</p>
<p>{npc.notes}</p>