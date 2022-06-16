<script lang='ts'>
  import type { Data } from '$lib/data/character';
  import { onMount } from 'svelte';

  export let character:Data

  onMount(() => {
    if (!character.feature_settings.proteges){
      character.feature_settings.proteges = []
    }
  })
  function add_protege() {
    const blank = {name: '', principle: ''}
    character.feature_settings.proteges = [blank, ...character.feature_settings.proteges]
  }
  function clear(index) {
    const proteges = character.feature_settings.proteges
    if (proteges[index].name && proteges[index].principle) {
      character.growth += 4
    }
    character.feature_settings.proteges = [
      ...proteges.slice(0, index),
      ...proteges.slice(index+1, proteges.length)
    ]
  }
</script>
{#if character.feature_settings.proteges}
{#each character.feature_settings.proteges as {name, principle}, index}
<div>
  <input placeholder="name" bind:value={name} />
  <input placeholder="principle" bind:value={principle} />
  <button class='p' on:click={()=>{clear(index)}}>Clear</button>
</div>
{/each}
<button class='p' on:click={add_protege}>Add protégé</button>
{/if}
