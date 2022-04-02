<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Lightly Obscured'>
  <ul>
    <li><Tip text='Disadvantage' /> on Perception checks that rely on sight.</li>
    <li>Includes dim light, patchy fog, or moderate foliage.</li>
  </ul>
</Header>