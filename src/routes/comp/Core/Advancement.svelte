<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Advancements' is_page_title>
  <p>These advancements can be taken twice each:</p>
  <ul>
    <li>Take a new <a href='/comp/Moves'>move</a> from your playbook</li>
    <li>Take a new move from another playbook</li>
    <li>Shift your <Tip text='center'/> one step</li>
    <li>Unlock your <Tip text='Moment of Balance'/></li>
  </ul>
  <p>You can also raise a <Tip text='stat'/> by +1, up to a maximum of +2 in any given stat.</p>
</Header>