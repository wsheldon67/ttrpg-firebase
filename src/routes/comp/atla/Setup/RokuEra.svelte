<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Roku Era'>
  <p>Covers the time right after Sozin 
  became Fire Lord and before Roku married. Play 
  in the Roku Era if you want to deal with tensions 
  between different nations and the trials of maintaining an uneasy peace.</p>
</Header>