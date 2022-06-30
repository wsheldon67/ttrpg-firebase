<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import type { NPC } from "$lib/data/npc";
  import { signed } from "$lib/pretty";

  export let amt = 1
  export let character:Data|NPC
  function add_gears() {
    if (!character.feature_settings.gears) {
      character.feature_settings.gears = 0
    }
    character.feature_settings.gears += amt
  }
</script>
<button
  class='p'
  on:click={add_gears}
>{signed(amt)} {amt === 1 ? 'Gear' : 'Gears'}</button>