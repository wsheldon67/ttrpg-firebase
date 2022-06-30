<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Jury Rig">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  {#if character}
    <div class='col'>
      <label>
        Current Gears:
        <input type='number' bind:value={character.feature_settings.gears} />
      </label>
      <label>
        Record your devices and their associated techniques here:
        <textarea bind:value={character.feature_settings.JuryRig}></textarea>
      </label>
    </div>
  {/if}
  <p><em>Create a new device on the fly.</em></p>
  <ul>
    <li>Become <Tip text='favored'/></li>
    <li><Tip text='Hold'/> 1 gear</li>
    <li>Name one <Tip text='basic technique'/> from any approach.</li>
  </ul>
  <p>As long as you hold this device, you can use that technique as if it was part of your current <Tip text='approach'/> by spending 1 gear.</p>
  <p>You may also spend gears instead of fatigue on:</p>
  <ul class='or'>
    <li>Technology techniques</li>
    <li>Basic techniques using technology training</li>
  </ul>
</Header>
<style>
  .col {
    display: flex;
    flex-direction: column;
  }
  textarea {
    width: 100%;
  }
  label {
    display: block;
  }
</style>