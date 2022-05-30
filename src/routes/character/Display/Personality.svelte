<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from '$lib/data/character'
  import { playbook } from "$lib/data/playbooks";
  import { array_to_words } from "$lib/pretty";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  $: connections = playbook[character.playbook].connections
</script>
<Header h={1} {start} title='Personality' {hide}>
  <p>I am {array_to_words(character.demeanors)}.</p>
  {#each character.connections as connection, index}
    <p>{connections[index][0]} {connection} {connections[index][1]}</p>
  {/each}
</Header>