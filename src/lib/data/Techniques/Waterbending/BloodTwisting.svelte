<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Blood Twisting'>
  <slot slot='header' />
  {#if character}
    You are {character.positive_statuses.find(el => el.name === 'Empowered').applied ? '' : 'not'} currently Empowered.
  {/if}
  <p><em>Use bloodbending to move and twist a foe's body in painful ways.</em></p>
  <ul>
    <li>You must be <Tip text='empowered'/> to use this technique.</li>
    <li>To use this technique, your foe cannot already be <Tip text='stunned'/></li>
    <li>Inflict a <Tip text='condition'/> on your foe.</li>
  </ul>
  <p>If this is your 1st, 2nd or 3rd time using this technique, mark a condition.</p>
</Header>