<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
import Military from './Military.svelte'
import Monastic from './Monastic.svelte'
import Outlaw from './Outlaw.svelte'
import Privileged from './Privileged.svelte'
import Urban from './Urban.svelte'
import Wilderness from './Wilderness.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start + 1
</script>
<Header h={1} {start} {hide} title='Background' is_page_title>
  <p>Who your character was and where they came from.</p>
  <ul>
    <li>Explains your character's origins and <Tip text='training'/></li>
    <li>Choose up to 2 during character creation</li>
  </ul>
  <Military start={low} hide/>
  <Monastic start={low} hide/>
  <Outlaw start={low} hide/>
  <Privileged start={low} hide/>
  <Urban start={low} hide/>
  <Wilderness start={low} hide/>
</Header>