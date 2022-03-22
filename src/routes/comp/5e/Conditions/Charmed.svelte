<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Charmed'>
  <ul>
    <li>Charmed cannot attack the charmer or target the charmer with harmful abilities or magical effects.</li>
    <li>Charmer has advantage on ability checks to interact socially with charmed.</li>
  </ul>
</Header>