<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Stunned' is_page_title>
  <p>You're caught off guard. You can't act or respond for a few seconds until you steady yourself.</p>
  <Header h={2} {start} title='Examples' hide>
  <p>Completely thrown off, unable to think or act with intent:</p>
  <ul>
    <li>Getting the wind knocked out of you</li>
    <li>Taking a significant blow to the head</li>
    <li>Taking an explosion to the face</li>
  </ul>
  </Header>
</Header>