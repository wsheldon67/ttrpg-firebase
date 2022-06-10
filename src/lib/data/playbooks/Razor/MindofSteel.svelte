<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves'
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false

  function get_conditions(char:Data):number {
    return character.conditions.filter(el => el.applied).length
  }
  function get_principle(char:Data):number {
    return Math.abs(char.balance)
  }
</script>
<Header h={1} {start} {hide} title="Mind of Steel">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  {#if character}
    <div class='cont' class:good={get_conditions(character) < get_principle(character)}>
      <span>Conditions: {get_conditions(character)}</span>
      <span>Highest Principle: {get_principle(character)}</span>
    </div>
  {/if}
  <p><Tip text='Advance and attack'/> or <Tip text='evade and observe'/> with fewer conditions marked than your highest principle.</p>
  <ul><li>Roll with Focus instead of the normal stat.</li></ul>
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .cont > span {
    color: var(--bad);
  }
  .cont.good > span {
    color: var(--good);
  }
</style>