<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Technique Levels'>
  <Header h={2} {start} title='Learned'>
    <p>To use in a combat exchange:</p>
    <ul>
      <li>Roll a 10+ on the <Tip text='stance'/> move and...</li>
      <li>Mark 1 <Tip text='fatigue'/></li>
    </ul>
  </Header>
  <p>To upgrade a move to Practiced, use it in a single <Tip text='combat exchange'/>.</p>
  <Header h={2} {start} title='Practiced'>
  <p>To use in a combat exchange:</p>
  <ul>
    <li>Roll a 10+ on the <Tip text='stance'/> move</li>
  </ul>
  </Header>
  <p>To upgrade a move to Mastered, fulfill a <Tooltip tip='Assigned by the GM, considering what the teacher might want the character to learn, in the context of the technique.'>mastery condition</Tooltip> set by your teacher.</p>
  <Header h={2} {start} title='Mastered'>
    <p>To use in a combat exchange:</p>
    <ul>
      <li>Roll a 7+ on the <Tip text='stance'/> move</li>
    </ul>
  </Header>
</Header>