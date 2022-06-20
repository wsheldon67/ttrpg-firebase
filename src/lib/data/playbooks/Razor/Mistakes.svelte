<script lang='ts'>
import type { Data } from "$lib/data/character"
import { onMount } from "svelte";


  export let character:Data
  export let mistakes:string[]

  onMount(() => {
    if (!character.feature_settings.Mistakes) {
      character.feature_settings.Mistakes = new Array(4)
      character.feature_settings.show_balance_start = true
    }
  })
</script>
{#if character.feature_settings.Mistakes}
{#each character.feature_settings.Mistakes as mistake}
  <select bind:value={mistake}>
    <option>-</option>
  {#each mistakes.filter(el => !character.feature_settings.Mistakes.includes(el) || el === mistake) as text}
    <option>{text}</option>
  {/each}
  </select>
{/each}
{/if}
<style>
  select {
    display: block;
  }
</style>