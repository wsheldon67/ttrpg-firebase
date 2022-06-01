<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'

  export let start: number = 1
  export let hide: boolean = false
  
</script>
<Header h={1} {start} {hide} title='Assess a Situation'>
  <slot slot="header"/>
  <Header h={2} {start} title='Examples'>
    <p>Any time you gather specific or useful information during a tense moment:</p>
    <ul>
      <li>Scouting ahead for danger</li>
      <li>Sizing up your opponent in a negotiation</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Creativity'>
    <ResultTable>
      <td>Ask one question</td>
      <td>Ask two questions</td>
    </ResultTable>
  </Header>
  <Header h={2} {start} title='Questions:'>
    <Header h={3} {start} hide title='What here can I use to _____?'>
      <ul>
        <li>Looking for a specific item or environmental feature to accomplish a goal</li>
        <li>Answer can be "nothing"</li>
      </ul>
    </Header>
    <Header h={3} {start} hide title='Who or what is the biggest threat?'>
      <ul>
        <li>Can specify: biggest threat to you or someone else?</li>
      </ul>
    </Header>
    <Header h={3} {start} hide title='What should I be on the lookout for?'>
      <ul>
        <li>You notice things that might indicate future danger or complications.</li>
      </ul>
    </Header>
    <Header h={3} {start} hide title="What's my best way out/in/through?">
      <ul>
        <li>Out = escape</li>
        <li>In = towards danger</li>
        <li>Through = bypass</li>
      </ul>
    </Header>
    <Header h={3} {start} hide title='Who or what is in the greatest danger?'>
      <ul>
        <li>Identify the people or things <em>affected</em> by a threat.</li>
      </ul>
    </Header>
  </Header>
  <Header h={2} {start} title='Rules'>
  <ul>
    <li>Does not include <Tooltip tip='Things that are readily apparent do not require a move to discover.'>surface details</Tooltip></li>
    <li>Must be answered fully and honestly</li>
    <li>Gain +1 <Tip text='ongoing'/> when acting on the answer.</li>
  </ul>
  </Header>
</Header>