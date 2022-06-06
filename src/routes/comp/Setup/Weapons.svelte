<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Weapons' is_page_title>
  <p>Martial experts who can hold their own against benders.</p>
  <ul>
    <li>Raining arrows down on opponents</li>
    <li>Pulling off a dangerous trick with a boomerang</li>
    <li>Deflecting blows with their bare hands</li>
    <li>Duelists, archers, chi blockers</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Golden meteor hammer</li>
      <li>Dual dragon-engraved broadswords</li>
      <li>Acrobatic chi blocking</li>
      <li>Massive jade bow</li>
      <li>Ancient three-section staff</li>
    </ul>
  </Header>
</Header>