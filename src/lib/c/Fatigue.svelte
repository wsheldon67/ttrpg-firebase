<script lang='ts'>
  import type { Data } from "$lib/data/character";
import type { NPC } from "$lib/data/npc";
  import { signed } from "$lib/pretty";
import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher()

  export let character:Data|NPC
  export let amt:number = 1

  // @ts-ignore
  $: max_fatigue = character.max_fatigue || 5

  $: disabled = (amt > 0 && character.fatigue >= max_fatigue) || (amt < 0 && character.fatigue <= 0)

  function click() {
    character.fatigue += amt
    if (character.fatigue > max_fatigue) {character.fatigue = max_fatigue}
    if (character.fatigue < 0) {character.fatigue = 0}
    dispatch('click',{new_value: character.fatigue, inflicted: amt})
  }
</script>
<button class='p' on:click={click} {disabled}>
  {signed(amt)} Fatigue
</button>