<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Frightened'>
  <ul>
    <li><Tip text='Disadvantage'/> on ability checks and attack rolls while the source of fear is in line of sight.</li>
    <li>Can't willingly move closer to source of fear.</li>
  </ul>
</Header>