<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Fueled By Anger'>
  <slot slot='header'/>
  <p>Mark <Tip text='Angry'/> to use an additional <Tip text='basic'/> or <Tip text='mastered'/> technique when you <Tip text='advance and attack'/>, even on a miss. While Angry is marked, take +1 <Tip text='ongoing'/> to <Tip text='intimidate'/> others.</p>
</Header>