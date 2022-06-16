<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Scale from "$lib/c/Scale.svelte";
  import { get_unused_advancements } from "$lib/data/calc_character";
  import type { Data } from '$lib/data/character'
  import { playbook } from "$lib/data/playbooks";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  export let id:string

  $: current_growth = character.growth % 4
  $: advancements_availabe = get_unused_advancements(character)

  function update({detail}) {
    character.growth += detail
  }
</script>
<Header h={1} {start} {hide} title='Growth & Advancement'>
  <Scale
    value={current_growth} 
    min=0 max=4 optimum=4 low=0 high=4
    on:change={update}
  />
  {#if advancements_availabe > 0}
    <a href={'/character/growth-'+id}>Advancements available: {advancements_availabe}</a>
  {:else}
    <p>Advancements available: {advancements_availabe}</p>
  {/if}
  <p>Answer this question in addition to the standard growth questions:</p>
  <p><em>{playbook[character.playbook].growth_question}</em></p>
</Header>