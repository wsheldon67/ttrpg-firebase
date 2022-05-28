<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Walls Can't Hold Me">
  <p>When you <Tip text='rely on your skills and training'/>, to dangerously smash your way through walls or other obstacles, roll with <Tip text='Passion'/> instead of <Tip text='Focus'/>.</p>
</Header>