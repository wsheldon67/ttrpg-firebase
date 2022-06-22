<script lang='ts'>
  import type { NPC } from "$lib/data/npc";
  import { beforeUpdate, createEventDispatcher, onMount } from 'svelte';
  import { beforeNavigate } from '$app/navigation';
  import Header from "$lib/c/Header.svelte";
  import Info from "./Display/_info.svelte";
  import Mechanics from "./Display/_mechanics.svelte";
  import Techniques from "./Display/_techniques.svelte";
  import Notes from "./notes.svelte";
  const dispatch = createEventDispatcher();

  export let npc:NPC
  export let start:number = 1
  export let hide:boolean = false

  // on updates, send to server
  let timeout_id
  beforeUpdate(async()=>{
    if (timeout_id) {clearTimeout(timeout_id)}
    // wait 200ms to see if there's any sequential updates
    timeout_id = setTimeout(()=>{
      dispatch('update',npc)
      timeout_id = undefined
    }, 2000)
  })
  beforeNavigate(() => {
    dispatch('update', npc)
  })
  onMount(() => {
    //@ts-ignore
    window.debug_npc = () => {
      return npc
    }
  })
</script>
<Header h={1} {start} {hide} title={`${npc.name} - ${npc.importance} NPC`} is_page_title>
  <Info {npc} />
</Header>
<Header h={1} {start} title='Mechanics' hide>
  <Mechanics bind:npc={npc} />
</Header>
<Header h={1} {start} title='Techniques' hide>
  <Techniques bind:npc={npc} {start} />
</Header>
<Header h={1} {start} title='Notes'>
  <Notes name={npc.name} />
</Header>
