<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Trick" is_page_title>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you use your wits and skills to fool, confuse, or deceive an NPC:</p>
    <ul>
      <li>Faking illness to draw a prison guard into your cell</li>
      <li>Dressing up as a dark spirit to scare intruders away</li>
      <li>Convincing a ship capitain to give you passasge with forged papers</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Creativity'>
    <ResultTable>
      <td>Pick one option</td>
      <td>Pick two options</td>
    </ResultTable>
    <p>Options:</p>
    <ul>
      <li>They stumble, take +1 <Tip text='forward'/> to acting against them.</li>
      <li>They act foolishly and you are given an opportunity.</li>
      <li>They overcommit and are deceived for some time.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Wait to trigger this move until the moment you want the NPC to do something</li>
    </ul>
  </Header>
</Header>