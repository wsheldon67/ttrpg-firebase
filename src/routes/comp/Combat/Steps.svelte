<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Steps' is_page_title>
  <Header h={2} {start} title='1. GM Chooses Approaches' hide>
    <p>The GM chooses an <Tip text='approach'/> for each NPC or NPC group in secret.</p>
  </Header>
  <Header h={2} {start} title='2. Players Choose Approaches' hide>
    <p>Players discuss and choose their approaches.</p>
    <ul>
      <li>If PCs are fighting each other, the approaches are kept secret.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='3. Reveal Approaches' hide>
    <p>The GM reveals the approaches choosen for each NPC or NPC group.</p>
    <ul><li>Any secret PC approaches are revealed at this time as well.</li></ul>
  </Header>
  <Header h={2} {start} title='4-6. Resolve Approaches' hide>
    <p>Resolve the approaches in order:</p>
    <ol>
      <li><Tip text='Defend and Maneuver'/></li>
      <li><Tip text='Advance and Attack'/></li>
      <li><Tip text='Evade and Observe'/></li>
    </ol>
    <p>For each approach:</p>
    <ol>
      <li>PCs roll the <Tip text='stance'/> move</li>
      <li>PCs choose their <Tip text='techniques'/></li>
      <li>NPCs choose their <Tip text='techniques'/></li>
    </ol>
    <p>All techniques within an approach are considered simultaneous. Anyone who is <Tip text='taken out'/>, <Tip text='loses their balance'/> or acquires a <Tip text='status'/> does not do so until the exchange ends.
    </p>
  </Header>
  <Header h={2} {start} title='7. Resolve Taken Out/Lost Balance' hide>
    <p>Anyone who has been <Tip text='taken out'/>, <Tip text='lost their balance'/> or acquired a <Tip text='status'/> resolves those effects.</p>
  </Header>
  <p>This ends the exchange. Regular play resumes until <Tooltip tip='It is possible that another exchange will begin soon or even immediately.'>another exchange is started</Tooltip>.</p>
</Header>