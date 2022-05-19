<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Best Friend'>
  <p>Your small animal companion could helps you <Tip text='push your luck'/>:</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Roll with <Tip text='Creativity'/> instead of <Tip text='Passion'/></li>
  </ul>
  <p>If your animal companion ever gets hurt, mark a <Tip text='condition'/>.</p>
</Header>