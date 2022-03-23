<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Disadvantage'>
  <p>Roll two d20s and take the lower result.</p>
</Header>