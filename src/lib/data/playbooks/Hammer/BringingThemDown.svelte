<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const goals = [
    `Capture`, `Depose`, `Expose`, `Discredit`, `Restrain`, `Exile`
  ]
</script>
<Header h={1} {start} {hide} title='Bringing Them Down'>
  <p>You always have an adversary, one who represents the things you're trying to smash through.</p>
  <ul>
    <li>Your adversary embodies large, dangerous concepts like tyranny, inequality or war.</li>
    <li>Your adversary is someone significant and powerful.</li>
  </ul>
  {#if character}
    <label>
      Your adversary:
      <input bind:value={character.feature_settings.Adversary} />
    </label>
    <label>
      Your goal for your adversary:
      <select bind:value={character.feature_settings.AdversaryGoal}>
        {#each goals as goal}
          <option>{goal} them</option>
        {/each}
      </select>
    </label>
  {:else}
  <p>Record the name of your adversary and choose a goal you have for them:</p>
  <ul>
    {#each goals as goal}
      <li>{goal} them</li>
    {/each}
  </ul>
  {/if}
  <p>Take -1 <Tip text='ongoing'/> to <Tip text='plead'/> with, <Tip text='trick'/>, or <Tip text='guide and comfort'/> your adversary.</p>
  <Header h={2} {start} title='Changing Your Adversary' hide>
    <p>You can change your adversary any time you mark a <Tip text='condition'/>, or at the end of each session.</p>
    <ul>
      <li>Choose an appropriate goal for your new adversary</li>
      <li>The GM <Tip text='shifts your balance'/> twice to match the new adversary and goal</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Fighting Your Adversary' hide>
    <ul>
      <li>Clear all <Tip text='fatigue'/></li>
      <li>Become <Tip text='Inspired'/></li>
    </ul>
    <p>You can mark 1 fatigue to roll with conditions marked on the <Tip text='stance'/> move, instead of the normal stat.</p>
  </Header>
  <p>When you successfully accomplish you goal and defeat your adversary, take a <Tip text='growth'/> advancement and choose a new adversary.</p>
</Header>