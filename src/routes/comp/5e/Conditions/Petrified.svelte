<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Petrified'>
  Creature and any non-magical objects it is carrying are transformed into a solid, inanimate substsance.
  <ul>
    <li>Weight increases 10x</li>
    <li>Aging ceases</li>
    <li>Creature is <Tip text='incapacitated'/></li>
    <li>Cannot speak or move</li>
    <li>Unaware of surroundings</li>
    <li>Attack rolls against have advantage</li>
    <li>Str and Dex saving throws fail</li>
    <li><Tip text='Resistant'/> to all damage</li>
    <li>Immune to new poison and disease. Existing poison or disease is suspended.</li>
  </ul>
</Header>