<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Stunned'>
  <p>For a stunned creature:</p>
  <ul>
    <li>It is <Tip text='incapacitated'/> and cannot move.</li>
    <li>It can speak only falteringly.</li>
    <li>It fails Str and Dex saving throws.</li>
    <li>Attacks against it have advantage.</li>
  </ul>
</Header>