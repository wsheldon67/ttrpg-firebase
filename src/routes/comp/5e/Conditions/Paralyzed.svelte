<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Paralyzed'>
  <ul>
    <li><Tip text='Incapacitated' path='Conditions/Incapacitated'/></li>
    <li>Fails Str and Dex saving throws.</li>
    <li>Attack rolls against the creature have <Tip text='advantage'/></li>
    <li>Attackers within 5 feet automatically crit if they hit.</li>
  </ul>
</Header>