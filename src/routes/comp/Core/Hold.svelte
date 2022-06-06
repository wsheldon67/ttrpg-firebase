<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Hold' is_page_title>
  <p>Keep the bonus until you have spent it, as described by the move.</p>
  <ul>
    <li>Usually expires at the end of the conversation or scene.</li>
    <li>Hold does not pool between sources.</li>
  </ul>
</Header>