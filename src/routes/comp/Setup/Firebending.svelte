<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Firebending' is_page_title>
  <slot slot='header' />
  <p>Manipulate their chi and ambient fire with intense and aggressive results.</p>
  <ul>
    <li>Slicing through a barrier with a blade of flame</li>
    <li>Pinning enemies by unleashing a concentrated fire stream</li>
    <li>Barraging foes from afar with precise fire bolts</li>
    <li>Mix close punches and kicks with flame bursts</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Pulling heat out of a place with one hand and emitting heat from the other hand</li>
      <li>Creating knives or a sword of flame</li>
      <li>Breathing fire</li>
      <li>Swinging chained censers emitting smoke and flame</li>
      <li>Throwing super-heated pinpoint darts of fire</li>
    </ul>
  </Header>
</Header>