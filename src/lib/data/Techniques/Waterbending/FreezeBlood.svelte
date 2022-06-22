<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Freeze Blood'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  {#if character}
    You are {character.positive_statuses.find(el => el.name === 'Empowered').applied ? '' : 'not'} currently Empowered.
  {/if}
  <p><em>Use bloodbending to seize a target and hold them in place.</em></p>
  <p>You must be <Tip text='empowered'/> to use this technique.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Make your target <Tip text='trapped'/> or <Tip text='doomed'/></li>
  </ul>
  <p>If this is your 1st, 2nd, or 3rd time ever using this technique, mark a <Tip text='condition'/>.</p>
</Header>