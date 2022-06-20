<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from "$lib/data/character";
  import Mistakes from "./Mistakes.svelte";
  import FullResult from "$lib/c/FullResult.svelte";
  import Tip from "$lib/c/Tip.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import OtherPlaybook from "../../../../routes/character/Growth/OtherPlaybook.svelte";
  import Honed from "./Honed.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const mistakes = [
    `I tried to subjugate or dominate a group or place`,
    `I betrayed a person or group who trusted me in a vital moment`,
    `I destroyed someone trying to save me from myself or my masters`,
    `I delivered an innocent into the clutches of my masters`,
    `I badly injured someone in an accident or moment of weakness`,
    `I trained someone younger than me using the same awful methods`
  ]
  let amends = false
  let center = false
  $: char_center = character ? character.balance === character.center : false
  let thank = false
  //@ts-ignore
  $: total = amends + center + char_center + thank
  let move_hide = true
  function back() {
    move_hide = true
    console.log(move_hide)
  }
</script>
<Header h={1} {start} {hide} title='Making Amends'>
  <p>You were once the weapon of powerful figures - your masters. In your time as your masters' weapon, you hurt people, even those who looked to you for friendship, leadership, protection, or support. You must make amends.</p>
  <p>Choose 4 mistakes:</p>
  {#if character}
    <Mistakes bind:character={character} {mistakes} />
  {:else}
    <ul>
      {#each mistakes as mistake}
        <li>{mistake}</li>
      {/each}
    </ul>
  {/if}
  <Header h={2} {start} title='Prove You Are Different' hide>
    <p>Try your best to prove that you are a different, better person now through your actions. Check all that apply:</p>
    <div class='col'>
      <label>
        <input type='checkbox' bind:checked={amends} />
        I made amends directly to a person I harmed.
      </label>
      <!--svelte-ignore a11y-label-has-associated-control-->
      <label>
      {#if character}
        <input type='checkbox' checked={char_center} disabled/>
      {:else}
        <input type='checkbox' bind:checked={center} />
      {/if}
        I am at my center.
      </label>
      <label>
        <input type='checkbox' bind:checked={thank} />
        Someone honestly thanked me for my efforts, or forgave me for my mistakes.
      </label>
    </div>
    <p>Roll with a +{total}:</p>
    <FullResult>
      <tr>
        <td rowspan="2">You don't feel you've changed. Choose someone to ask what more you can do. The GM will <Tip text='shift your balance'/> twice based on what they say.</td>
        <td colspan="2">You feel the spark of hope - you're making progress.</td>
      </tr>
      <tr>
        <td>Choose 1:</td>
        <td>Choose 2, or unlock the next <Tooltip tip='See "Disconnected" below'>Connection balance track space</Tooltip></td>
      </tr>
    </FullResult>
    <p>Options:</p>
    <ul>
      <li>Clear a <Tip text='condition'/></li>
      <li>Mark <Tip text='growth'/></li>
      <li>Shift your balance toward Connection</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Disconnected' hide>
    {#if !character?.feature_settings?.show_balance_start}
      <p>Your balance begins play at +2 Control; you can still shift it by one step when you make your character.</p>
      {#if character}
        <button class='p' on:click={()=>{character.feature_settings.show_balance_start = false}}>I already took care of this, hide it.</button>
      {/if}
    {/if}
    <p>Your Connection principle starts locked - you cannot <Tip text='shift your balance'/> higher than +0 Connection.</p>
    <ul>
      <li>If you would shift your balance to a locked value, you <Tip text='lose your balance'/>.</li>
      <li>Your <Tip text='center'/> also cannot shift to an unlocked Connection value.</li>
    </ul>
    <p>When you shift your center to +1, +2, and +3 Connection for the first time, choose a companion to whom you have connected.</p>
    <ul><li>They give you one move from their playbook.</li></ul>
    {#if character}
      <Header h={3} {start} title='Add Moves' bind:hide={move_hide}>
        <OtherPlaybook bind:character={character} {back} count_advancement={false}/>
      </Header>
    {/if}
  </Header>
  <Header h={2} {start} title='Honed' hide>
    <p>Sublimate your feelings to be effective.</p>
      {#if character}
        <Honed bind:character={character} />
      {:else}
        <ul>
          <li>Clear <Tip text='conditions'/> equal to 1 + your Control</li>
          <li>Cross off one unmarked condition</li>
          <li>You can no longer mark that condition for any reason</li>
        </ul>
        <p>When you shift your <Tip text='center'/> toward Connection, you may restore all crossed off conditions.</p>
      {/if}
      <hr />
      <p>You may <Tip text='live up to your principle'/> of Control by shifting balance toward Control instead of marking fatigue.</p>
  </Header>
</Header>
<style>
  .col {
    display: flex;
    flex-direction: column;
  }
</style>