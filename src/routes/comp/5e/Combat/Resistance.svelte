<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Resistance'>
  <p>Damage of the specified type is halved against the creature.</p>
</Header>