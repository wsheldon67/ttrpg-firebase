<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { backgrounds } from "$lib/data/backgrounds";
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
  <Header h={1} {start} title='History & Background' {hide}>
    <p>Background</p>
    <ul>
      {#each character.backgrounds as background}
        <li>
          <Tooltip tip={backgrounds[background]}>{background}</Tooltip>
        </li>
      {/each}
    </ul>
    <p>
    {#each character.history as history}
      {history} {' '}
    {/each}
    </p>
    <p>My hometown is {character.hometown}.</p>
  </Header>