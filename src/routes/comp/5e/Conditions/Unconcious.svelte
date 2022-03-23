<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Unconscious'>
  <p>For a creature that is unconcious:</p>
  <ul>
    <li>It is <Tip text='incapacitated'/> and cannot move or speak.</li>
    <li>It drops whatever it's holding and falls prone.</li>
    <li>It fails Str and Dex saving throws.</li>
    <li>Attacks against it have <Tip text='advantage'/>.</li>
    <li>Attacks from within 5 feet against it <Tip text='crit'/> if they hit.</li>
  </ul>
</Header>