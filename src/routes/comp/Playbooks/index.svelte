<script lang='ts'>
import { goto } from '$app/navigation';

  import Header from '$lib/c/Header.svelte'
  import { playbooks } from '$lib/data/playbooks'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Playbooks' is_page_title>
  <div class='cardtainer'>
    {#each playbooks as {blurb, motivation, name}}
      <button class='card' on:click={() => {goto('/comp/Playbooks/'+name)}}>
        <h2>The {name}</h2>
        <p>The {name} {blurb} Play the {name} if {motivation}</p>
      </button>
    {/each}
  </div>
</Header>