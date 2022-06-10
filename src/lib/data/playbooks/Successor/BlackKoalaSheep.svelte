<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves'
  import { backgrounds } from "$lib/data/backgrounds"
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Black Koala-Sheep'>
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  {#if character}
    <Header h={2} {start} title='Backgrounds'>
      <ul class='list'>
        {#each character.backgrounds as background}
          <li>
            <Tooltip tip={backgrounds[background]}>{background}</Tooltip>
          </li>
        {/each}
      </ul>
    </Header>
  {/if}
  <p>Behave in a way that shocks and unsettles people from one of your backgrounds.</p>
  <ul>
    <li>Roll Creativity to <Tip text='intimidate'/> them or <Tip text='push your luck'/>.</li>
  </ul>
</Header>