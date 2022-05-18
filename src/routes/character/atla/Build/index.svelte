<script lang='ts'>
import { beforeUpdate } from "svelte";
import type { Data } from '../character'
import { playbooks } from "../playbooks";

import Backgrounds from "./Backgrounds.svelte";
import Connections from "./Connections.svelte";
import Details from "./Details.svelte";
import Playbook from "./Playbook.svelte"
import Review from "./Review.svelte";
import Stats from "./Stats.svelte";
import Techniques from "./Techniques.svelte";
import Touches from "./Touches.svelte";
import Training from "./Training.svelte";

  const order = [Playbook, Details, Training, Backgrounds, Touches, Stats, Techniques, Connections, Review]
  let current_page = 0

  export let character:Data = {
    playbook: 'Adamant',
    concept: '',
    name: '',
    training: 'Waterbending',
    fighting_style: '',
    backgrounds: [],
    hometown: '',
    demeanors: [],
    history: new Array(5),
    look: '',
    boosted_stats: [],
    fatigue: 0,
    conditions: [],
    balance: 0,
    center: 0,
    playbook_moves: [],
    techniques: [{name: playbooks.Adamant.technique.name, level: 2}],
    connections: ['',''],
    statuses: [],
    growth_advancements: [],
    growth: 0,
    feature_settings: {}
  }

  // on updates, send to server
  let timeout_id
  beforeUpdate(async()=>{
    if (timeout_id) {clearTimeout(timeout_id)}
    // wait 200ms to see if there's any sequential updates
    timeout_id = setTimeout(()=>{
      console.log('//TODO send to server', character)
      timeout_id = undefined
    }, 2000)
  })

  //FIXME next, back position incorrectly if page is long enough to scroll

</script>
<style>
  .next, .back {
    position: absolute;
    bottom: 2.2em;
  }
  .next {
    right: .5em;
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