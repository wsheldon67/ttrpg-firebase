<script lang='ts'>
import FullResult from '$lib/c/FullResult.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import Conditions from '../../../../routes/character/Display/Conditions.svelte'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="More Than Fate's Playthings">
  <div slot='header' class='buttons'>
    <slot />
  </div>
  {#if character}
    <Conditions bind:character={character} start={start+1}/>
  {/if}
  <p><Tip text='Call someone out'/> by convincing them that their destiny is (or can be) different than they imagined.</p>
  <FullResult>
    <tr>
      <td>Their demand hits all the harder. Mark 2 <Tip text='conditions'/> or act as they request.</td>
      <td colspan="2">They must do it or mark 2 conditions.</td>
    </tr>
  </FullResult>
</Header>