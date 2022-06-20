<script lang='ts'>
import type { Data } from "$lib/data/character";
import Tooltip from "$lib/c/Tooltip.svelte";
import { plural } from '$lib/pretty'
import { onMount } from "svelte";

  export let character:Data
  onMount(() => {
    if (!character.feature_settings.crossed_conditions) {
      character.feature_settings.crossed_conditions = character.conditions.map(({name}) => {
        return {name, crossed: false}
      })
    }
  })
  function restore() {
    character.feature_settings.crossed_conditions = character.feature_settings.crossed_conditions.map(({name}) => {
      return {name, crossed: false}
    })
  }
</script>
<ul>
  <li>Clear <Tooltip tip='1 + your Control'>{plural(1 - character.balance, 'condition')}</Tooltip></li>
</ul>
<p>Cross off one unmarked condition:</p>
{#if character.feature_settings.crossed_conditions}
{#each character.feature_settings.crossed_conditions as {name, crossed}, index}
  <label class:crossed={crossed}>
    <input type='checkbox' bind:checked={crossed} disabled={character.conditions[index].applied}/>
    {name}
  </label>
{/each}
{/if}
<p>You can no longer mark that condition for any reason.</p>
<button class='p' on:click={restore}>Restore All</button>
<p>When you shift your center toward Connection, you may restore all crossed off conditions.</p>
<style>
  .crossed {
    text-decoration: line-through;
  }
</style>