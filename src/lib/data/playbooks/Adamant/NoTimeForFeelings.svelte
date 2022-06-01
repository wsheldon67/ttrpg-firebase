<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='No Time For Feelings'>
  <slot slot='header'/>
  <p>Mark 1 <Tip text='fatigue'/> to push down your feelings for the rest of the scene:</p>
  <ul>
    <li>Ignore <Tip text='condition'/> penalties</li>
  </ul>
  <p>When you <Tip text='resist shifting your balance'/>:</p>
  <ul>
    <li>Mark a condition to roll with conditions marked (max +4)</li>
    <li>Cannot then choose to clear a condition by proving them wrong.</li>
  </ul>
</Header>