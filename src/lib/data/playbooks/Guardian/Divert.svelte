<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Divert'>
  <p>Step into the way of blows intended for allies; when any ally within reach suffers 
  a blow this <Tip text='exchange'/>, you can suffer it for them. If you also use
  <Tip text='Retaliate'/> this exchange, deal an additional 1 <Tip text='fatigue'/> each time.</p>
</Header>