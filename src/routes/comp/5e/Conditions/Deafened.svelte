<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Deafened'>
  <p>Fail any ability check that requires hearing.</p>
</Header>