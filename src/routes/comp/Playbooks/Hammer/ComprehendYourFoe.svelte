<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Comprehend Your Foe'>
  <p>When you <Tip text='defend and maneuver'/> against a foe whose balance <Tip text='principle'/> you know, you may mark <Tip text='fatigue'/> to roll with <Tip text='Creativity'/> instead of <Tip text='Focus'/>.</p>
</Header>