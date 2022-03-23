<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Advantage'>
  <p>Roll two d20's and take the higher result.</p>
</Header>