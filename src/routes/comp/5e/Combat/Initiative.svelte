<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Initiative'>
  <ul>
    <li>The order of turns during combat</li>
    <li>Determined by a dexterity check (+ any modifiers specific to initiative)</li>
  </ul>
</Header>