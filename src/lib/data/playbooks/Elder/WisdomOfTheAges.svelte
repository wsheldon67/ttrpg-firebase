<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";
  import { onMount } from "svelte";
  import GrowthAndProteges from "./GrowthAndProteges.svelte";
  import { set_alt_conditions } from './conditions'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  export let id:string

  onMount(()=>{
    set_alt_conditions(character)
  })
</script>
<Header h={1} {start} {hide} title='Wisdom of the Ages'>
  <p>You've lived longer than the other companions, long enough to have mastered your training many times over... and perhaps long enough to think you don't have much left to learn.</p>
  <Header h={2} {start} title='Mastered Techniques' hide>
    <p>You start with 4 additional <Tip text='mastered'/> techniques.</p>
    <ul>
      <li>You can choose these techniques whenever you like.</li>
      <li>You can train other characters in these techniques using the <Tip text='training move'/>.</li>
    </ul>
    {#if character && id}
      <a href={`/character/technique-${id}`}>Choose Techniques</a>
    {/if}
  </Header>
  <Header h={2} {start} title='Learning Techniques' hide>
    <p>Until you open up a new slot, you cannot learn new techniques.</p>
    <ul>
      <li>When you shift your <Tip text='center'/> to a +1, +2, or +3 Humility for the first time, you open a new slot.</li>
      <li>You can then learn a new technique using the <Tip text='training move'/>.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Growth & Protégés' hide>
    {#if character}
      <GrowthAndProteges bind:character={character} />
    {/if}
    <p>You do not earn <Tip text='growth'/>. When a PC embraces your <Tip text='guidance and comfort'/>, you may:</p>
    <ul>
      <li><Tip text='Shift your balance'/> toward Experience</li>
      <li>Declare them a protégé, record their name and one of their principles.</li>
    </ul>
    <p>When that PC shifts their <Tip text='center'/> towards that principle, clear their name and take an advancement.</p>
  </Header>
  <Header h={2} {start} title='Conditions' hide>
    <p>You have different conditions:</p>
    <table>
      <tr>
        <th>Condition</th>
        <th>Bonus/Penalty</th>
        <th>To Clear...</th>
      </tr>
      <tr>
        <td>Frustrated</td>
        <td>-2 to <Tip text='push your luck'/>; +1 to <Tip text='intimidate'/></td>
        <td>Lash out at someone or act decisively without consulting anyone</td>
      </tr>
      <tr>
        <td>Jaded</td>
        <td>-2 to <Tip text='plead'/>; +1 to <Tip text='trick'/></td>
        <td>Give in or give up in the face of meaningful opposition</td>
      </tr>
      <tr>
        <td>Remorseful</td>
        <td>-2 to the <Tip text='stance move'/>; +1 to <Tip text='call someone out'/></td>
        <td>Attempt to make genuine ammends for past wrongs</td>
      </tr>
      <tr>
        <td>Shaken</td>
        <td>-2 to <Tip text='guide and comfort'/>; +1 to <Tip text='assess a situation'/></td>
        <td>Seek guidance from an old friend or mentor</td>
      </tr>
      <tr>
        <td>Worried</td>
        <td>-2 to <Tip text='deny a callout'/>; +1 to <Tip text='rely on skills and training'/></td>
        <td>Take control in a situation in which another should lead</td>
      </tr>
    </table>
    <p>You cannot take moves from other playbooks that reference conditions you don't have.</p>
  </Header>
</Header>