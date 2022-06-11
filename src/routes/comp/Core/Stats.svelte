<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Stats' is_page_title>
  <Header h={2} {start} title='Creativity'>
  
  </Header>
  <Header h={2} {start} title='Focus'>
  
  </Header>
  <Header h={2} {start} title='Harmony'>
  
  </Header>
  <Header h={2} {start} title='Passion'>
  
  </Header>
</Header>