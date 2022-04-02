<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Dim Light'>
  <ul>
    <li>Lighly obscured</li>
    <li>Includes shadows, twilight, or a particularly bright full moon</li>
    <li>Includes the boundry at the edge of a light source's radius</li>
  </ul>
</Header>