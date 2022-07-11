<script lang='ts'>
  import { beforeUpdate } from "svelte";
  import type { Campaign } from '$lib/data/campaign'
  import { createEventDispatcher, onMount } from "svelte/internal";
  const dispatch = createEventDispatcher()
  
  import { beforeNavigate } from "$app/navigation";
  import Era from "./era.svelte";
  import Scope from "./scope.svelte";
  import Focus from "./focus.svelte";
  import Incident from "./incident.svelte";
  
    const order = [Era, Scope, Focus, Incident]
    let current_page = 0
  
    export let campaign:Campaign
  
    // on updates, send to server
    let timeout_id
    beforeUpdate(async()=>{
      if (timeout_id) {clearTimeout(timeout_id)}
      // wait 200ms to see if there's any sequential updates
      timeout_id = setTimeout(()=>{
        dispatch('update',campaign)
        timeout_id = undefined
      }, 2000)
    })
    beforeNavigate(()=> {
      dispatch('update', campaign)
    })
    onMount(()=> {
      //@ts-ignore
      window.debug_campaign = () => {
        return campaign
      }
    })
  </script>
  <style>
    .next, .back {
      position: fixed;
      bottom: 2.2em;
    }
    .next {
      right: var(--right-side);
      margin-right: 2.2em;
    }
    .back {
      left: .5em;
    }
  </style>
  
  <svelte:component this={order[current_page]} bind:campaign={campaign}/>
  
  {#if current_page > 0}
    <button on:click={()=>{current_page--}} class='back p'>Back</button>
  {/if}
  {#if current_page < order.length-1}
    <button on:click={()=>{current_page++}} class='next p'>Next</button>
  {/if}