<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Lose Your Balance'>
  <slot slot="header"/>
  <p>When your balance shifts past the end of the track, choose one of the following:</p>
  <ul>
    <li>Give in or submit to your opposition</li>
    <li>Lost control of yourself in a destructive and harmful way</li>
    <li>Take an extreme action in line with the principle, then flee</li>
  </ul>
  <p>Once you have had time to recover, shift your <a href='/comp/atla/Balance'>center</a> one step towards the principle you exceeded and clear all your <Tip text='conditions'/> and <Tip text='fatigue'/>.</p>
</Header>