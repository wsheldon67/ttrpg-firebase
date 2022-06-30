<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Entangler">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>Entangle a foe with a weapon or device. Mark 1 <Tip text='fatigue'/> to wrap the entangling object around your foe:</p>
  <ul>
    <li>They are <Tip text='trapped'/>.</li>
    <li>They break free automatically after they are trapped for two full <Tip text='exchanges'/>.</li>
  </ul>
</Header>