<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Acrobatics'>
  <ul>
    <li>Stay on your feet in a tricky situation</li>
    <li>Perform an acrobatic stunt such as a dive, roll, somersault or flip</li>
  </ul>
</Header>