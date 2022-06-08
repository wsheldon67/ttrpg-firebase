<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Earthbending' is_page_title>
  <slot slot='header' />
  <p>Bide their time, using their element to defend until the perfect moment.</p>
  <ul>
    <li>Levitating stones to hurl them into obstacles</li>
    <li>Escasing their body in a protective shell of earth</li>
    <li>Trasmuting earth to quicksand</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Sandbending</li>
      <li>Traveling through earth</li>
      <li>Wearing bands of stone</li>
      <li>Seismic sensing</li>
      <li>Rock armor</li>
    </ul>
  </Header>
</Header>