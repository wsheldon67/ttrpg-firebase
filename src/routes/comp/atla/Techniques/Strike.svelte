<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Strike'>
  <p>Mark 0 <Tip text='fatigue'/>, they choose one:</p>
  <ul>
    <li>Mark 2 fatigue</li>
    <li>Mark a <Tip text='condition'/></li>
    <li><Tip text='shift their balance'/> away from center</li>
  </ul>
  <p>Mark 1 fatigue, you choose one:</p>
  <ul>
    <li>They mark 2 fatigue</li>
    <li>They mark a condition</li>
  </ul>
</Header>