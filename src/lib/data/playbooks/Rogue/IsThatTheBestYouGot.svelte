<script lang='ts'>
  import FullResult from '$lib/c/FullResult.svelte'
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves';
  
  export let character:Data = undefined
  export let move:Move = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Is That the Best You Got?'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
      <slot />
    {/if}
  </div>
  <p>Goad or provoke an NPC into foolhardy action. Say what you want them to do and roll Passion:</p>
  <FullResult>
    <tr>
      <td>They take harsh action against you in a way you're ill-prepared to counter.</td>
      <td>They choose 1 option:</td>
      <td>They do it.</td>
    </tr>
  </FullResult>
  <p>Options:</p>
  <ul>
    <li>They do it, but more intensely than expected - you're taken off guard.</li>
    <li>They do it, but more carefully than expected - they gain an advantage against you.</li>
    <li>They don't do it, but they embarrass themselves - they mark a <Tip text='condition'/>.</li>
    <li>They don't do it, but only catch themself at the last minute. They stubmle and give you an opportunity.</li>
  </ul>
</Header>