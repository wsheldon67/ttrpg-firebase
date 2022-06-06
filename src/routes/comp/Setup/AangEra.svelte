<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Aang Era' is_page_title>
  <p>Set after the events of the Imbalance comics trilogy, some time after the end of 
    Avatar: The Last Airbender. Play in the Aang Era if 
    you want to heal the world after tragedy and help 
    push it into a brighter future.</p>
</Header>