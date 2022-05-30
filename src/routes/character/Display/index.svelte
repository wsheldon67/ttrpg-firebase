<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import Identity from "./Identity.svelte";
  import Stats from "./Stats.svelte";
  import Status from "./Status.svelte";
  import Moves from "./Moves.svelte";
  import Techniques from "./Techniques.svelte";
  import Growth from "./Growth.svelte";

  import { beforeUpdate, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  
  export let character:Data
  let start = 1

  // on updates, send to server
  let timeout_id
  beforeUpdate(async()=>{
    if (timeout_id) {clearTimeout(timeout_id)}
    // wait 200ms to see if there's any sequential updates
    timeout_id = setTimeout(()=>{
      dispatch('update',character)
      timeout_id = undefined
    }, 2000)
  })
</script>
<Identity {character} {start} hide/>
<Stats bind:character={character} {start} hide/>
<Status bind:character={character} {start} hide/>
<Moves {character} {start} hide/>
<Techniques {character} {start} hide/>
<Growth bind:character={character} {start} hide/>