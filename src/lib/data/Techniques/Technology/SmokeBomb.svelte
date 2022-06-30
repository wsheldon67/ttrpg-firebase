<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Smoke Bomb">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Throw a smoke bomb to cover your escape from the combat.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict <Tip text='impaired'/> on every other combatant in the area.</li>
    <li>You escape at the end of this <Tip text='exchange'/></li>
  </ul>
  <p>Any foe who is <Tip text='engaged'/> with you and not impaired may mark 1 fatigue to block your escape.</p>
</Header>