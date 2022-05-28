<script lang='ts'>
  import { goto } from '$app/navigation'
  import Header from '$lib/c/Header.svelte'
  import { playbooks } from '$lib/data/playbooks'

  export let start: number = 1
  export let hide: boolean = false

  function click(name:string) {
    goto(`/comp/Playbooks/${name}`)
  }
</script>
<Header h={1} {start} {hide} title='The Playbooks'>
  <div class='cardtainer'>
    {#each playbooks as {name, blurb, motivation}}
    <button class='card' on:click={()=>{click(name)}}>
      <h2>The {name}</h2>
      <p><em>The {name} {blurb} Play the {name} if {motivation}</em></p>
    </button>
    {/each}
  </div>
</Header>