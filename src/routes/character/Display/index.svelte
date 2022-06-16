<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import Identity from "./Identity.svelte";
  import Stats from "./Stats.svelte";
  import Status from "./Status.svelte";
  import Moves from "./Moves.svelte";
  import Techniques from "./Techniques.svelte";
  import Growth from "./Growth.svelte";
  import { beforeUpdate, createEventDispatcher } from 'svelte'
  import Bonuses from "./Bonuses.svelte";
  import Special from "./Special.svelte";
import { beforeNavigate } from "$app/navigation";
  const dispatch = createEventDispatcher()
  
  export let character:Data
  export let id:string = null
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
  beforeNavigate(() => {
    dispatch('update', character)
  })
</script>
<svelte:head>
  <title>{character.name || 'Untitled'}: The {character.playbook}</title>
</svelte:head>
<Identity {character} {start} hide/>
<Stats bind:character={character} {start} hide/>
<Status bind:character={character} {start} hide/>
<Special bind:character={character} {start} {id} hide/>
<Moves bind:character={character} {start} {id} hide/>
<Techniques bind:character={character} {start} hide/>
<Growth bind:character={character} {start} {id} hide/>
<Bonuses bind:character={character} {start} hide/>