<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import AangEra from './AangEra.svelte'
import HundredYearWarEra from './HundredYearWarEra.svelte'
import KorraEra from './KorraEra.svelte'
import KyoshiEra from './KyoshiEra.svelte'
import RokuEra from './RokuEra.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Eras' is_page_title>
  <KyoshiEra start={start+1} />
  <RokuEra start={start+1} />
  <HundredYearWarEra start={start+1} />
  <AangEra start={start+1} />
  <KorraEra start={start+1} />
</Header>