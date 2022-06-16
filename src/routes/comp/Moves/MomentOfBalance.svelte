<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Moment of Balance' is_page_title>
  <p>A special and extremely powerful move that resolves an entire <Tip text='scene'/> of conflict.</p>
  <ul>
    <li>Unlocked through <Tip text='advancement'/></li>
    <li>Your <Tip text='balance'/> must be at your <Tip text='center'/> to use it</li>
  </ul>
</Header>