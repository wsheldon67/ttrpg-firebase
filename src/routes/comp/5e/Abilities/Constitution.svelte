<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link hit points
</script>
<Header h={1} {start} {show} title='Constitution'>
  <p>Primarily used to determine <Tip text='hit points' />. Other checks include:</p>
  <ul>
    <li>Hold your breath</li>
    <li><Tip text='March' path='Movement/ForcedMarch'/> or labor for hours without rest</li>
    <li>Go without sleep</li>
    <li>Survive without food or water</li>
    <li>Quaff an entire stein of ale in one go</li>
  </ul>
</Header>