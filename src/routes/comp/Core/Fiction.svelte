<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Fiction'>
  <p>The world you create together when you play. Includes:</p>
  <ul>
    <li>The setting</li>
    <li>The history of the game world</li>
    <li>The history of each character</li>
    <li>Each character's principles, motivations, backgrounds, etc.</li>
  </ul>
</Header>