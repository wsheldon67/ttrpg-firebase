<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Chart A Course">
  <div slot='header' class='buttons'>
    <slot />
  </div>
  {#if character}
    <label>
      Chosen approach & techniques:
      <textarea bind:value={character.feature_settings.ChartACourse}></textarea>
    </label>
  {/if}
  <p><em>Plan a clear and perfect path of action.</em></p>
  <p>Secretly choose your <Tip text='approach'/> and up to 2 techniques you plan to use in the next <Tip text='exchange'/>.</p>
  <p>If you use those techniques in the next exchange:</p>
  <ul>
    <li>Reveal your planning</li>
    <li>Those techniques cost no <Tip text='fatigue'/></li>
    <li>Those techniques cannot be canceled or blocked</li>
  </ul>
  <p>Anyone <Tip text='engaged'/> with you can mark 1 fatigue to look at the note.</p>
</Header>