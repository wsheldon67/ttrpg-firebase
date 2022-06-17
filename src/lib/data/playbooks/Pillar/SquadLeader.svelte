<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
import Team from "./Team.svelte";
  import YourSquad from "./YourSquad.svelte";
  import YourSquadChar from "./YourSquadChar.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const traits = [`weapons`, `fighting style`, `battle cry`, `costumes`, `legends`, `purpose`]
  const values = [`Excellence`, `Justice`, `Duty`, `Mercy`, `Tradition`, `Protection`]
  const away = [
    `protecting their home while I am away`, `protecting a powerful figure`, `temporarily disbanded or exiled`,
    `training and preparing for something important`, `journeying and doing good works throughout [the scope]`,
    `escorting important travelers`, `stationed at an important location`, `performing traditional or ceremonial duties`
  ]
</script>
<Header h={1} {start} {hide} title='Squad Leader'>
  <p>You were the leader of a small group of 10 or so well-trained warriors from a recognized and noble tradition.</p>
  <Header h={2} {start} title='Your Squad' hide>
    {#if character}
      <YourSquadChar bind:character={character} {traits} {values} {away} />
    {:else}
      <YourSquad {traits} {values} {away} />
    {/if}
  </Header>
  <Header h={2} {start} title='Leadership & Support'>
    <p>You earn <strong>Team</strong> through your <strong>leadership</strong> style, and spend it through your <strong>support</strong> style.</p>
    {#if character}
      <Team bind:character={character} />
    {/if}
    <p>At the end of each session, you may change 1 style of leadership and 1 style of support.</p>
    <Header h={3} {start} title='Leadership Styles' hide>
      <p>Choose 2:</p>
      <table>
        <tr>
          <th>Style</th>
          <th>Earn 1 <strong>team</strong> when...</th>
        </tr>
        <tr>
          <td>Firm</td>
          <td>you openly call on a companion to <Tip text='live up to their principle'/>.</td>
        </tr>
        <tr>
          <td>Inspiring</td>
          <td>you live up to your principle and roll a hit.</td>
        </tr>
        <tr>
          <td>Diplomatic</td>
          <td>you <Tip text='plead'/> with an NPC for help and roll a 10+.</td>
        </tr>
        <tr>
          <td>Empathetic</td>
          <td>you <Tip text='guide and comfort'/> a companion and they open up to you.</td>
        </tr>
        <tr>
          <td>Guidance</td>
          <td>you <Tip text='assess a situation'/> and give a companion instructions based on the answers.</td>
        </tr>
        <tr>
          <td>Indomitable</td>
          <td>you roll a hit when you <Tip text='resist shifting your balance'/> or <Tip text='deny a callout'/>.</td>
        </tr>
      </table>
    </Header>
    <Header h={3} {start} title='Support Styles' hide>
      <p>Choose 2:</p>
      <table>
        <tr>
          <th>Style</th>
          <th>Spend 1 <strong>team</strong> when...</th>
        </tr>
        <tr>
          <td>Comforting</td>
          <td>you spend time one-on-one in a quiet moment with a companion to clear a <Tip text='condition'/> from them.</td>
        </tr>
        <tr>
          <td>Invigorating</td>
          <td>you rally a companion to action in a tense moment to clear 2 <Tip text='fatigue'/> from them.</td>
        </tr>
        <tr>
          <td>Bolstering</td>
          <td>you help another companion to give them +1 to their roll, after the roll.</td>
        </tr>
        <tr>
          <td>Encouraging</td>
          <td>you openly endorse a friend <Tip text='living up to their principle'/> to <Tip text='shift their balance'/> toward that principle.</td>
        </tr>
        <tr>
          <td>Trusting</td>
          <td>you openly endorse a friend <Tip text='resisting shifting their balance'/>, to give them +2, after the roll.</td>
        </tr>
      </table>
    </Header>
  </Header>
</Header>
<style>
  td:nth-child(1) {
    font-weight: bold;
  }
</style>