<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Who is engaged with whom?' is_page_title>
  <p>Combatants must be engaged to participate in a <Tip text='combat exchange'/>. Combatants are engaged if:</p>
  <ul>
    <li>They are in reach of each other's skills, training, and techniques, and</li>
    <li>They actively focus on each other</li>
  </ul>
  <p>Combatants are split into individual exchanges, rather than one giant exchange.</p>
</Header>