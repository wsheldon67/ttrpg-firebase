<script lang='ts'>
import { beforeUpdate } from "svelte";
import { blank, type Data } from '$lib/data/character'
import { createEventDispatcher } from "svelte/internal";
const dispatch = createEventDispatcher()

import Backgrounds from "./Backgrounds.svelte";
import Connections from "./Connections.svelte";
import Details from "./Details.svelte";
import Playbook from "./Playbook.svelte"
import Review from "./Review.svelte";
import Stats from "./Stats.svelte";
import Techniques from "./Techniques.svelte";
import Touches from "./Touches.svelte";
import Training from "./Training.svelte";
import { beforeNavigate } from "$app/navigation";

  const order = [Playbook, Details, Training, Backgrounds, Touches, Stats, Techniques, Review, Connections]
  let current_page = 0

  export let character:Data = JSON.parse(JSON.stringify(blank))

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
  beforeNavigate(()=> {
    dispatch('update', character)
  })
</script>
<style>
  .next, .back {
    position: fixed;
    bottom: 2.2em;
  }
  .next {
    right: var(--right-side);
    margin-right: 1em;
  }
  .back {
    left: .5em;
  }
</style>

<svelte:component this={order[current_page]} bind:character={character}/>

{#if current_page > 0}
  <button on:click={()=>{current_page--}} class='back p'>Back</button>
{/if}
{#if current_page < order.length-1}
  <button on:click={()=>{current_page++}} class='next p'>Next</button>
{/if}