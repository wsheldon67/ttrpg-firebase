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
import { beforeNavigate } from "$app/navigation";
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
  beforeNavigate(() => {
    dispatch('update', character)
  })
  export let character:Data
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