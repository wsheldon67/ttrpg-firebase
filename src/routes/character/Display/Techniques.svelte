<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { techniques } from '$lib/data/techniques'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  $: technique_names = character.techniques.map(el => el.name)
  $: applicable_techniques = techniques.filter(el => technique_names.includes(el.name))


</script>
<Header h={1} {start} {hide} title='Techniques'>

  {#each applicable_techniques as {component}}
    <svelte:component this={component} start={start+1} bind:character={character} hide/>
  {/each}

</Header>