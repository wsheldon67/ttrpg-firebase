<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Taken Out'>
  <p>Happens when you have already marked 5 conditions and must mark another.</p>
  <ul>
    <li>You become unconscious, injured, distraught, or trapped.</li>
    <li>Your actions can't trigger moves or affect the scene.</li>
    <li>You cannot embrace <Tip text='guidance and comfort'/>.</li>
  </ul>
  <Header h={2} {start} title='Recovery'>
    <p>You recover after the <Tip text='scene'/>.</p>
    <p>Clear all marked <Tip text='fatigue'/>, but keep your <Tip text='conditions'/>.</p>
  </Header>
</Header>