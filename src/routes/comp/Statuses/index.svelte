<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Doomed from './Doomed.svelte'
import Empowered from './Empowered.svelte'
import Favored from './Favored.svelte'
import Impaired from './Impaired.svelte'
import Inspired from './Inspired.svelte'
import Prepared from './Prepared.svelte'
import Stunned from './Stunned.svelte';
import Trapped from './Trapped.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Header h={1} {start} {hide} title='Negative Statuses'>
  <Doomed start={low} hide/>
  <Impaired start={low} hide/>
  <Stunned start={low} hide/>
  <Trapped start={low} hide/>
</Header>
<Header h={1} {start} {hide} title='Positive Statuses'>
  <details>
    <summary>Comparison</summary>
    <ul>
      <li>By external circumstance = Empowered</li>
      <li>On the fly player action = Favored</li>
      <li>Bolstered emotionally = Inspired </li>
      <li>Because of preparation = Prepared</li>
    </ul>
  </details>
  <Empowered start={low} hide/>
  <Favored start={low} hide/>
  <Inspired start={low} hide/>
  <Prepared start={low} hide/>
</Header>