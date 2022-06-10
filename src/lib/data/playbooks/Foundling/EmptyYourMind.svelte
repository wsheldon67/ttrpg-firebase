<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import Tip from '$lib/c/Tip.svelte'
  import Fatigue from '$lib/c/Fatigue.svelte'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Empty Your Mind">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>You can flow and adapt, formless and shapeless. During an exchange, after your roll the <Tip text='stance move'/>:</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Select a basic technique from a different approach than the one you chose.</li>
  </ul>
  <p>You must still pay all other costs of that technique.</p>
</Header>