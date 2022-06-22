<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Spread Out">
  <slot slot='header' />
  <p><em>The group spreads itself out to cover more ground and avoid large-scale attacks.</em></p>
  <p>The group cannot suffer more than 1 <Tip text='fatigue'/>, 1 <Tip text='condition'/>, or 1 <Tip text='balance shift'/> from any individual attack.</p>
  <ul>
    <li>The attacker chooses which if necessary</li>
  </ul>
  <p>The group can engage with any foes in a much wider reach, and pays no cost to keep an engaged foe from escaping.</p>
</Header>