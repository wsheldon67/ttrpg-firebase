<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
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
          <Tooltip tip='//TODO live tip'>{background}</Tooltip>
        </li>
      {/each}
    </ul>
    {#each character.history as history}
      <p>{history}</p>
    {/each}
    <p>My hometown is {character.hometown}.</p>
  </Header>