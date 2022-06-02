<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Understanding Mien'>
  <p>Take +1 to Harmony (max +3)</p>
</Header>