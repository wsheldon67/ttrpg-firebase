<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Scene'>
  <p>A scene is any time role-playing occurs.</p>
  <ul>
    <li>A scene starts when role-playing begins.</li>
    <li>The scene ends when role-playing ends.</li>
    <li>Transitions between scenes are described by the GM.</li>
  </ul>
  <p>"Skip the boring stuff."</p>
</Header>