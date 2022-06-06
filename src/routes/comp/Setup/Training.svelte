<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  import Airbending from './Airbending.svelte'
  import Earthbending from './Earthbending.svelte'
  import Firebending from './Firebending.svelte'
  import Technology from './Technology.svelte'
  import Waterbending from './Waterbending.svelte'
  import Weapons from './Weapons.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Training Style' is_page_title>
  <Waterbending start={start+1} hide/>
  <Earthbending start={start+1} hide/>
  <Firebending start={start+1} hide/>
  <Airbending start={start+1} hide/>
  <Weapons start={start+1} hide/>
  <Technology start={start+1} hide/>
</Header>