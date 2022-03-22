<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Invisible'>
  <ul>
    <li>Impossible to see</li>
    <li>Considered to be <Tip text='heavily obscured' path='Environment/HeavilyObscured'/></li>
    <li>Attack rolls have <Tip text='advantage'/></li>
    <li>Attack rolls against have <Tip text='disadvantage'/></li>
  </ul>
</Header>