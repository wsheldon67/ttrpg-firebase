<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
  import FullResult from "$lib/c/FullResult.svelte";
  import Roll from "$lib/c/Roll.svelte";
  import Fatigue from "$lib/c/Fatigue.svelte";

  export let start:number = 1
  export let hide:boolean = false
  export let character:Data = undefined

</script>
<Header h={1} {start} {hide} title='The Lodestar'>
  <p>There's only one person you often let past your emotional walls.</p>
  {#if character}
    <label>
      Your Lodestar:
      <input bind:value={character.feature_settings.lodestar} />
    </label>
  {/if}
    <Header h={2} {start} title='Change Your Lodestar' hide>
      <p>You have the option to shift your lodestar to someone when:</p>
      <ul>
        <li>They <Tip text='guide and comfort'/> you and you open up to them, or</li>
        <li>You guide and comfort them and they open up to you.</li>
      </ul>
      <p>If you shift your lodestar, clear an additional <Tip text='condition'/>.</p>
    </Header>
    <Header h={2} {start} title='Shut Someone Down' hide>
      <div slot='header' class='buttons'>
        {#if character}
          <button class='p'
            on:click={()=>{character.balance++}}
          >Balance => Results</button>
          <Roll mod={character.balance} stat='Results' label='Shut Someone Down' />
        {/if}
      </div>
      <p>You shut down someone vulnerable to harsh words or icy silence.</p>
      <ul>
        <li>Shift your balance towards Results</li>
        <li>Roll with Results</li>
      </ul>
      <FullResult>
        <tr>
          <td rowspan='2'>They have the right retort. Mark a condition and <Tip text='shift your balance'/>.</td>
          <td colspan='2'>They mark a condition and you clear the same condition.</td>
        </tr>
        <tr>
          <td></td>
          <td>They also cannot shift your balance or <Tip text='call you out'/> for the rest of the <Tip text='scene'/>.</td>
        </tr>
      </FullResult>
      <p>You cannot use this on your lodestar.</p>
    </Header>
    <Header h={2} {start} title='Lodestar Calls You Out or Shifts Your Balance' hide>
      <p>When your lodestar <Tip text='calls you out'/>:</p>
      <ul><li>Treat as if you rolled a 10+</li></ul>
      <p>When your lodestar <Tip text='shifts your balance'/>:</p>
      <ul><li>Treat as if they rolled a 10+</li></ul>
    </Header>
    <Header h={2} {start} title='Consult Your Lodestar' hide>
      <div slot='header' class='buttons'>
        {#if character}
          <Roll mod={-character.balance} stat='Restraint' label='Consult Your Lodestar' />
          <Fatigue bind:character={character} amt={-2} />
        {/if}
      </div>
      <p>Consult your lodestar for advice on a problem. Roll Restraint:</p>
      <FullResult>
        <tr>
          <td>Something about their advice infuriates you. Mark a <Tip text='condition'/> or have the GM shift your balance twice.</td>
          <td>Your lodestar chooses 2 options</td>
          <td>Take all 3 options</td>
        </tr>
      </FullResult>
      <p>Options:</p>
      <ul>
        <li>They shift your balance; follow their advice and they shift your balance again.</li>
        <li>Clear a condition or 2 fatigue.</li>
        <li>They clear a condition or 2 fatigue.</li>
      </ul>
    </Header>
</Header>