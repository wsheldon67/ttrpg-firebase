<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Critical Hits'>
  <p>Roll all damage dice twice and take the total, before applying modifiers.</p>
  <p>Common causes:</p>
  <ul>
    <li>Rolling a <Tip text='natural 20'/></li>
    <li>Attacking a creature who is <Tip text='unconcious' path='Conditions/Unconcious'/> or <Tip text='paralyzed' path='Conditions/Paralyzed'/></li>
  </ul>
</Header>