<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Tag Team'>
  <p>Work with an ally against the same foe; choose an engaged foe and an ally - double any <Tip text='fatigue'/>, <Tip text='conditions'/>, or <Tip text='balance shifts'/> that ally inflicts upon the foe.</p>
</Header>