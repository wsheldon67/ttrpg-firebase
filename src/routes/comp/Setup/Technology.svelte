<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Technology' is_page_title>
  <slot slot='header' />
  <p>Uses their expertise with devices and machines to engage foes and resolve threats.</p>
  <ul>
    <li>Setting jury-rigged traps and snares</li>
    <li>Hurling flasks of alchemical concoctions</li>
    <li>Engaging enemies with self-made electrified weapons</li>
    <li>Carry the tools they need to create devices on the fly</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Throwable bomb pellets</li>
      <li>Complex slingshots hidden all over your outfit</li>
      <li>Electrified glove</li>
      <li>Bola traps</li>
      <li>Hidden wire reels and launchers</li>
    </ul>
  </Header>
</Header>