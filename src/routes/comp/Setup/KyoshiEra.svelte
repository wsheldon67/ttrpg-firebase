<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Kyoshi Era'>
  <p>Covers the events right after 
    The Shadow of Kyoshi novel. Play in the Kyoshi Era 
    if you want to fight in battles against rogues and 
    bandits and deal with governmental corruption as 
    the nations establish their borders.</p>
</Header>