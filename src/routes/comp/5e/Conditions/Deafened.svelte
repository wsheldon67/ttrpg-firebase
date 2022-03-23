<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Deafened'>
  <p>Fail any ability check that requires hearing.</p>
</Header>