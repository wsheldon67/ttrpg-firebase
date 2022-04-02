<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Heavily Obscured'>
  <ul>
    <li>Blocks vision entirely</li>
    <li>Observers are effectively <Tip text='blinded' path='Conditions/Blinded'/></li>
    <li>Includes darkness, opaque fog or dense foliage</li>
  </ul>
</Header>