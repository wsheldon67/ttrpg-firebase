<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Forward'>
  <p>Applies to the next applicable roll, as described by the move.</p>
  <ul>
    <li>Cannot be held past a roll that matches its trigger.</li>
  </ul>
</Header>