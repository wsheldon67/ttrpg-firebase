<script lang='ts'>
  import FullResult from "$lib/c/FullResult.svelte"
import Header from "$lib/c/Header.svelte"
  import Tip from "$lib/c/Tip.svelte"
  import type { Data } from "$lib/data/character"

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  let bonuses = [
    {text: `My ward listens to me more often than not.`, applies: false},
    {text: `I have recently protected my ward or helped them with a problem.`, applies: false},
    {text: `I am aware of an immediate threat to my ward.`, applies: false}
  ]
</script>
<Header h={1} {start} {hide} title="Protector's Burden">
  <p>You take it upon yourself to protect the people around you in general, but you have someone in particular you keep safe.</p>
  {#if character}
    <label>
      Your ward:
      <input bind:value={character.feature_settings.ProtectorsWard} />
    </label>
  {:else}
    <ul>
      <li>Record the name of your ward.</li>
    </ul>
  {/if}
  <ul>
    <li>When your ward marks a <Tip text='condition'/> in front of you, mark <Tip text='fatigue'/> or a condition.</li>
    <li>Your ward can always call on you to <Tip text='live up to your principle'/> without <Tip text='shifting their balance'/>, and with a +1.</li>
  </ul>
  <Header h={2} {start} title='At the beginning of each session' hide>
    <p>Check all that apply:</p>
    <div class='cont'>
      {#each bonuses as {text, applies}}
        <label>
          <input type='checkbox' bind:checked={applies} />
          {text}
        </label>
      {/each}
    </div>
    Roll with a +{bonuses.filter(el => el.applies).length}
    <FullResult>
      <tr>
        <td colspan="2">Hold 1</td>
        <td>Hold 2</td>
      </tr>
      <tr>
        <td>Take 1 consequence</td>
      </tr>
    </FullResult>
    <p>At any time, spend 1 hold to:</p>
    <ul>
      <li>Take a 10+ without rolling on any move to defend or protect your ward</li>
      <li>Track your ward down even if they are hidden or avoiding you</li>
      <li>Figure out what your ward is up to without them knowing</li>
    </ul>
    <p>Consequence Options</p>
    <ul>
      <li> Decide you're the only one who can keep them safe; <Tip text='shift your balance'/>
        twice toward Self-Reliance and keep them as your ward</li>
      <li> Decide they can handle life without your protection; shift your balance
        twice toward Trust and switch your ward to a new person.</li>
    </ul>
  </Header>
  <p>You may switch your ward if they leave play or are no longer present for some reason.</p>
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>