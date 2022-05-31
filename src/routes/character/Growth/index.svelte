<script lang='ts'>
  import { get_unused_advancements } from "$lib/data/calc_character";
  import type { Data } from "$lib/data/character"
  import { plural } from "$lib/pretty";
  import Center from "./Center.svelte"
  import Moment from "./Moment.svelte"
  import OtherPlaybook from "./OtherPlaybook.svelte"
  import Stat from "./Stat.svelte"
  import YourPlaybook from "./YourPlaybook.svelte"
  import { beforeUpdate, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

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

  export let character:Data = {
    playbook: 'Adamant',
    concept: '',
    name: '',
    training: 'Waterbending',
    fighting_style: '',
    backgrounds: [],
    hometown: '',
    demeanors: [],
    history: ['','','','',''],
    look: '',
    boosted_stats: [],
    fatigue: 0,
    conditions: [
      {name: 'Afraid', applied: false},
      {name: 'Angry', applied: false},
      {name: 'Guilty', applied: false},
      {name: 'Insecure', applied: false},
      {name: 'Troubled', applied: false}
    ],
    balance: 0,
    center: 0,
    moves: [],
    techniques: [{name: 'Pinpoint Aim', level: 2}],
    connections: ['',''],
    positive_statuses: [
      {name: 'Empowered', applied: false},
      {name: 'Favored', applied: false},
      {name: 'Inspired', applied: false},
      {name: 'Prepared', applied: false}
    ],
    negative_statuses: [
      {name: 'Doomed', applied: false},
      {name: 'Impaired', applied: false},
      {name: 'Trapped', applied: false},
      {name: 'Stunned', applied: false}
    ],
    growth_advancements: [],
    growth: 9,
    feature_settings: {}
  }
  let page:any = false
  $: advancements_available = get_unused_advancements(character)

  function back() {
    page = false
  }
  function count_upgrades(upgrade:string):number {
    return character.growth_advancements.filter(el => el.name === upgrade).length
  }
  function disabled(upgrade:string):boolean {
    if (advancements_available < 1) {
      return true
    } else if (upgrade === 'Raise Stat') {
      return false
    } else if (count_upgrades(upgrade) >= 2) {
      return true
    } else {
      return false
    }
  }
</script>
{#if page}
  <svelte:component this={page} bind:character={character} {back}/>
{:else}
<p>You have {plural(advancements_available, 'advancement')} available.</p>
<div class='cardtainer'>
  <button class='card p' on:click={()=>page = YourPlaybook} disabled={disabled('Your Playbook')}>
    ({count_upgrades('Your Playbook')}/2) Take a new move from your playbook
  </button>
  <button class='card p' on:click={()=>page = OtherPlaybook} disabled={disabled('Other Playbook')}>
    ({count_upgrades('Other Playbook')}/2) Take a new move from another playbook
  </button>
  <button class='card p' on:click={()=>page = Stat} disabled={disabled('Stat')}>
    Raise a stat by +1
  </button>
  <button class='card p' on:click={()=>page = Center} disabled={disabled('Shift Center')}>
    ({count_upgrades('Shift Center')}/2) Shift your center one step
  </button>
  <button class='card p' on:click={()=>page = Moment} disabled={disabled('Moment of Balance')}>
    ({count_upgrades('Moment of Balance')}/2) Unlock your Moment of Balance
  </button>
</div>
{/if}
<style>
  button.card {
    filter: initial;
  }
  button.card:hover {
    filter: saturate(1.5) brightness(.8);
  }
</style>