<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte';
import Tip from '$lib/c/Tip.svelte'
import { get_stat_object } from '$lib/data/calc_character';
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Furious Assault'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Impaired' />
    {/if}
    <slot />
  </div>
  <p>Make an unbalanced, impassioned strike.</p>
  <ul>
    <li>Become <Tip text='impaired'/> due to your overwhelming passion</li>
    <li><Tip text='Shift your balance'/> away from center</li>
    <li>Inflict <Tip text='conditions'/> equal to your Passion {character ? `(${get_stat_object(character).Passion})` : ''}</li>
  </ul>
  {#if !character}
    <p>NPCs instead inflict conditions equal to their current balance.</p>
  {/if}
  <p>You may only remove Impaired when your balance is at your <Tip text='center'/>.</p>
</Header>