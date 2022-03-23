<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Grappled'>
  <p>Effect:</p>
  <ul>
    <li>Speed = 0</li>
  </ul>
  <p>Ends if:</p>
  <ul>
    <li>Grappler is <Tip text='incapacitated'/>.</li>
    <li>Grappled is removed from reach of grappler.</li>
  </ul>
</Header>