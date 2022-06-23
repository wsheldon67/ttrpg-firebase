<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Ground Shift">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Twist the ground itself to displace or unbalance foes.</em></p>
  <p>Target an individual foe or an area.</p>
  <ul><li>If you target an area, mark 1 <Tip text='fatigue'/></li></ul>
  <p>All affected foes become <Tip text='impaired'/> for an <Tip text='exchange'/>.</p>
  <ul><li>If they are already impaired, they become <Tip text='stunned'/></li></ul>
</Header>