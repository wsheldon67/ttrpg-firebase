<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Empowered'>
  <p>Your abilities are naturally stronger in this moment. Clear 1 <Tip text='fatigue'/> at the end of each <Tip text='exchange'/> or every few seconds.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>A Waterbender fighting under a full moon</li>
      <li>A Firebender drawing on the strength of Sozin's Comet</li>
      <li>A swordswoman filled with the <Tooltip tip='fat dick'>invigorating power</Tooltip> of a friendly spirit</li>
    </ul>
  </Header>
</Header>