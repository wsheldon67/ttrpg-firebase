<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined

  $: conditions = character ? character.conditions.filter(el => el.applied).length : null
  $: highest_principle = character ? Math.abs(character.balance) : null
  $: total = character ? conditions + highest_principle + character.fatigue : null
</script>
<Header h={1} {start} {hide} title='Martyr Complex'>
  {#if character && move}
    <div class='status'>
      <p>Conditions: {conditions}</p>
      <p>Principle: {highest_principle}</p>
      <p>Fatigue: {character.fatigue}</p>
    </div>
    <p>Total: {total}</p>
  {/if}
  <p>When your total <Tip text='conditions'/>, highest <Tip text='principle'/>, and <Tip text='fatigue'/> is at least 8, take +1 <Tip text='ongoing'/> to all moves.</p>
</Header>
<style>
  .status {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>