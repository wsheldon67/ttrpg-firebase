<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Grappled'>
  Effect:
  <ul>
    <li>Speed = 0</li>
  </ul>
  Ends if:
  <ul>
    <li>Grappler is <Tip text='incapacitated'/>.</li>
    <li>Grappled is removed from reach of grappler.</li>
  </ul>
</Header>