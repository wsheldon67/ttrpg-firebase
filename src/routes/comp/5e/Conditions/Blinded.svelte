<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start:number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Blinded'>
  <p>When a creature is blinded:</p>
  <ul>
    <li>It fails ability checks that require sight.</li>
    <li>Others get <Tip text='advantage'/> on attack rolls against it.</li>
    <li>It has <Tip text='disadvantage'/> on attack rolls.</li>
  </ul>
</Header>