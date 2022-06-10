<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Winning is Everything">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p>Use dirty tactics at the start of a <Tip text='combat exchange'/>, such as targeting an innocent your foe is trying to protect, throwing sand in their face, etc.</p>
  <ul>
    <li>Instead of using the standard <Tip text='approaches'/>, say what you do and take 10+ instead of rolling the <Tip text='stance move'/>.</li>
    <li>Become <Tip text='Favored'/> for this exchange.</li>
    <li>Choose techniques from any approach.</li>
  </ul>
  <p>At the end of the exchange, your opponent may call out your disgraceful behavior and lack of integrity to <Tip text='shift your balance'/> twice.</p>
</Header>