<script lang='ts'>
import type { Data } from "$lib/data/character"
import { onMount } from "svelte";


  export let character:Data
  export let mistakes:string[]

  onMount(() => {
    if (!character.feature_settings.Mistakes) {
      character.feature_settings.Mistakes = mistakes.map((text) => {
        return {text, applied: false}
      })
      character.feature_settings.show_balance_start = true
    }
  })
</script>
{#if character.feature_settings.Mistakes}
{#each character.feature_settings.Mistakes as {text, applied}}
  <label>
    <input type='checkbox' bind:checked={applied} />
    {text}
  </label>
{/each}
{/if}
<style>
  label {
    display: block;
  }
</style>