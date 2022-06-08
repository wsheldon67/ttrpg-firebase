<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import { condition_is_applied } from '$lib/data/calc_character';
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Condition from '$lib/c/Condition.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Bonzu Pippinpaddleopsicoplis... The Third">
  <div slot='header' class='buttons'>
    {#if character && move}
      {#if condition_is_applied(character, 'Insecure')}
        <Fatigue bind:character={character} amt={2}/>
      {:else}
        <Condition bind:character={character} condition='Insecure'/>
      {/if}
    {/if}
    <slot />
  </div>
  <p><Tip text='Trick'/> an NPC by assuming a silly disguise or fake identity.</p>
  <ul>
    <li>Mark <Tip text='Insecure'/> (or +2 Fatigue if Insecure is already marked).</li>
    <li>Treat the roll as if it was a 12+.</li>
  </ul>
</Header>