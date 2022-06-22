<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let character:Data|NPC = undefined
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Protect Objective">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p><em>The group surrounds a person, place, or object with their backs to it, to protect it from attack, disruption, or seizure.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
    <li>Become <Tip text='prepared'/></li>
  </ul>
  <p>All foes near or engaged with the protected target become engaged with the group instead.</p>
  <p>No foe can reach the protected target until the group is scattered or loses prepared.</p>
</Header>