<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Can't Knock Me Down">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Openly refuse to back down or flee while you are engaged in combat with superior opposition.</p>
  <ul>
    <li>Roll with Harmony when you <Tip text='defend and maneuver'/> for the rest of the battle</li>
    <li>You cannot choose to escape the scene using <Tip text='seize a position'/></li>
  </ul>
</Header>