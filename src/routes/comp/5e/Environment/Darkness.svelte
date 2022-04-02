<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Darkness'>
  <ul>
    <li>Heavily obscured</li>
    <li>Includes outdoors at night, unlit rooms, or magical darkness</li>
  </ul>
</Header>