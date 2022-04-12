<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Difficult Terrain'>
  <p>Increases movement cost by 1 foot</p>
</Header>