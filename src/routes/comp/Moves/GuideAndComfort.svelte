<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'

  export let start: number = 1
  export let hide: boolean = false
  // TODO link shift balance
</script>
<Header h={1} {start} {hide} title='Guide and Comfort'>
  <slot slot="header"/>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you try to comfort or offer guidance, such as:</p>
    <ul>
      <li>Offering life advice as you brew them tea</li>
      <li>Reaching out to show them they are not alone</li>
    </ul>
    <p>They can embrace it or shut it down, which could look like:</p>
    <ul>
      <li>Falling into your arms as they sob out their true feelings</li>
      <li>Blow up in your face about how you're always telling them they're not good enough</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Harmony'>
    <ResultTable>
      <td>
        They choose to either:
        <ul>
          <li>Embrace your guidance and comfort. They immediately clear a <Tip text='condition'/> or 2 fatigue. You may ask one question, they must answer honestly.</li>
          <li>Shut you down. They inflict a condition on you, and you shift their <Tip text='balance'/>.</li>
        </ul>
      </td>
      <td>
        If they embrace your guidance and comfort:
        <ul>
          <li>You may also shift their <Tip text='balance'/>.</li>
        </ul>
      </td>
    </ResultTable>
  </Header>
  <Header h={2} {start} title='Rules'>
    <p>Must be <em>honest</em> comfort or guidance. Things that don't count include:</p>
    <ul>
      <li>Deceiving by being nice (<Tip text='tricking'/>)</li>
      <li><Tip text='Pleading'/></li>
      <li><Tip text='Calling them out'/> to act in accordance with their values</li>
    </ul>
    <p>Embracing cannot just be "I embrace your guidance and comfort"</p>
  </Header>
</Header>