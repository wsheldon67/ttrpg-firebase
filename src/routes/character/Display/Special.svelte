<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { specials } from '$lib/data/playbooks/specials'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  export let id:string

  $: special = specials[character.playbook]
</script>
<svelte:component this={special.component} {start} {hide} bind:character={character} {id}/>