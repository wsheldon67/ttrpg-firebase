<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Roll from '$lib/c/Roll.svelte'
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '../moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined

  $: marked_conditions = character ? character.conditions.filter(el => el.applied).length : null
</script>
<Header h={1} {start} {hide} title='No Time For Feelings'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Fatigue bind:character={character} />
      <Roll mod={marked_conditions} label='Resist Shifting Your Balance' stat='Conditions'/>
    {/if}
    <slot />
  </div>
  <p>Mark 1 <Tip text='fatigue'/> to push down your feelings for the rest of the scene:</p>
  <ul>
    <li>Ignore <Tip text='condition'/> penalties</li>
  </ul>
  <p>When you <Tip text='resist shifting your balance'/>:</p>
  <ul>
    <li>Mark a condition to roll with conditions marked (max +4)</li>
    <li>Cannot then choose to clear a condition by proving them wrong.</li>
  </ul>
</Header>