<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Bold'>
  <p><em>The Bold fights to live up to their self-image and earn 
    others' trust and confidence. Play the Bold if you 
    want to build your reputation and leadership skills.</em></p>
  <Header h={2} {start} title='Principles'>
    <Tooltip tip="Committed to others, and in turn, subordinate to others, putting the needs of their friends and companions far ahead of their own goals and feelings.">Loyalty</Tooltip> vs <Tooltip tip="Belief in themselves, their own abilities, and their own status. Takes action decisively, demands the respect due them, and makes their own decisions independently of others.">Confidence</Tooltip>
  </Header>
</Header>