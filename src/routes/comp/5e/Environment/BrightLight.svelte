<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Bright Light'>
  <ul>
    <li>See normally</li>
    <li>Includes daylight</li>
    <li>Includes torches, lanterns, fires and other light sources within a specific radius</li>
  </ul>
</Header>