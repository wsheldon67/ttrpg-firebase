<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import Tip from '$lib/c/Tip.svelte'
  import Roll from '$lib/c/Roll.svelte';
  import { playbook } from '..';
  import Fatigue from '$lib/c/Fatigue.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="A Warrior's Heart">
  <div slot='header' class='buttons'>
    {#if character && move}
      {#if character.conditions.filter(el => el.applied).length >= 3}
        <Roll
          mod={-character.balance}
          stat={playbook[character.playbook].principles[0].name}
          label='Live Up to Your Principle'
        />
        <Roll
          mod={character.balance}
          stat={playbook[character.playbook].principles[1].name}
          label='Live Up to Your Principle'
        />
        {#if character.conditions.filter(el => el.applied).length < 5}
          <Fatigue bind:character={character} />
        {/if}
      {/if}
    {/if}
    <slot />
  </div>
  <p>You get bonuses when you <Tip text='live up to your principle'/> if you have <Tip text='conditions'/> marked:</p>
  <ul>
    <li>3+: Ignore condition penalties</li>
    <li>5: Don't mark <Tip text='fatigue'/></li>
  </ul>
</Header>