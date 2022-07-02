<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Anticipate'>
  <slot slot='header' />
  <p><em>Study a nearby foe to learn where their momentum will take them next.</em></p>
  <ul>
    <li>Declare the <Tip text='approach'/> they are tending towards.</li>
    <li>In the next <Tip text='exchange'/>, that foe must use the named approach or mark a <Tip text='condition'/>.</li>
  </ul>
</Header>