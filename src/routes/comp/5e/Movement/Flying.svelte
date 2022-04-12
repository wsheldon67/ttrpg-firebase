<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Flying'>
  <Header h={2} {start} title='Falling'>
    <p>Fall if:</p>
    <ul>
      <li>Knocked <Tip text='prone'/></li>
      <li>Speed reduced to 0</li>
      <li>Deprived of the ability to move</li>
    </ul>
    <p>Unless:</p>
    <ul>
      <li>Has hover ability</li>
      <li>Is being held aloft by magic</li>
    </ul>
  </Header>
</Header>