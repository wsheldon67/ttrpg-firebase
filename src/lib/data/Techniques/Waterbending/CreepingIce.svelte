<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Creeping Ice'>
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p>Carefully and stealthily extend a sheet of ice out beneath foes of your choice.</p>
  <ul>
    <li>They become <Tip text='impaired'/> as long as they remain on the ice.</li>
    <li>You become <Tip text='prepared'/> to engage with them.</li>
  </ul>
</Header>