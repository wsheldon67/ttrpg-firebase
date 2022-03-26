<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Proficiency'>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Cannot be added to a signle die roll or other number more than once.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Lookup'>
    // TODO Proficiency Lookup
    will need to establish a connection to sqlite
  </Header>
</Header>