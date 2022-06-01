<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
  import { get_techniques } from "$lib/data/calc_techniques"
  import { onMount } from "svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  $: technique_names = character.techniques.map(el => el.name)

  let techniques

  onMount(async () => {
    techniques = await get_techniques(technique_names)
  })

</script>
<Header h={1} {start} {hide} title='Techniques'>

  {#each techniques as technique}
    <svelte:component this={technique.component} start={start+1} bind:character={character} hide/>
  {/each}

</Header>