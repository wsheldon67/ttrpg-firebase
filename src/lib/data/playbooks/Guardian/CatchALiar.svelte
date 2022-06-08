<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Fatigue from '$lib/c/Fatigue.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Catch a Liar'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
      <Fatigue bind:character={character} amt={-5} />
    {/if}
    <slot />
  </div>
  {#if character && move}
    <label>
      I am suspicious of
      <input bind:value={character.feature_settings.CatchALiar} />
    </label>
  {/if}
  <p>When you are suspicious of someone, record their name.</p>
  <ul>
    <li>When you expose their lies or wrong-doing, clear all your <Tip text='fatigue'/> and up to 2 <Tip text='conditions'/>.</li>
    <li>When you <Tip text='intimidate'/> them into admitting their crimes using actual evidence, you can eliminate one additional option from the list on any hit.</li>
  </ul>
  <p>You cannot replace their name until:</p>
  <ul>
    <li>They admit their guilt in front of an audience or...</li>
    <li>You mark a <Tip text='condition'/></li>
  </ul>
</Header>