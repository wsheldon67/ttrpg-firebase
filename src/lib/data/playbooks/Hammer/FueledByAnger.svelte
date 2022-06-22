<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import Roll from '$lib/c/Roll.svelte';
  import Condition from '$lib/c/Condition.svelte';
  import { condition_is_applied, get_basic_move_stat } from '$lib/data/calc_character';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined

</script>
<Header h={1} {start} {hide} title='Fueled By Anger'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <Condition bind:character={character} condition='Angry'/>
      <Roll 
        mod={get_basic_move_stat(character, move) + Number(condition_is_applied(character, 'Angry'))}
        label='Intimidate - Fueled by Anger'
        stat='Intimidate'
      />
    {/if}
    <slot />
  </div>
  <p>Mark <Tip text='Angry'/> to use an additional <Tip text='basic'/> or <Tip text='mastered'/> technique when you <Tip text='advance and attack'/>, even on a miss. While Angry is marked, take +1 <Tip text='ongoing'/> to <Tip text='intimidate'/> others.</p>
</Header>