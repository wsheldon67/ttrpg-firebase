<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Tip from '$lib/c/Tip.svelte';

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Chi Blocking Jabs">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Pinpoint weapon or hand strikes to block a foe's chi.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict a <Tip text='condition'/></li>
    <li>Render a limb useless, blocking bending with that limb</li>
  </ul>
  <p>An enemy with one fewer useful limb choses 1 fewer technique each <Tip text='exchange'/>.</p>
  <p>Limbs become usable again when combat ends or 3 exchanges pass.</p>
</Header>