<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Martyr Complex'>
  <p>When your total <Tip text='conditions'/>, <Tip text='principle'/>, and <Tip text='fatigue'/> is at least 8, take +1 <Tip text='ongoing'/> to all moves.</p>
</Header>