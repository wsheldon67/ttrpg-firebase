<script lang='ts'>
import { goto } from '$app/navigation';

  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Adamant from './Adamant/Blurb.svelte'
  import Bold from './Bold/Blurb.svelte'
  import Guardian from './Guardian/Blurb.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1

  let books = [
    {name: 'Adamant', comp: Adamant}, {name: 'Bold', comp: Bold}, {name: 'Guardian', comp: Guardian},
    
  ]
  function click(name) {
    goto(`/comp/atla/Playbooks/${name}`)
  }
</script>
<Header h={1} {start} {hide} title='The Playbooks'>
  <div class='cardtainer'>
    {#each books as {name, comp}}
    <button class='card' on:click={()=>{click(name)}}>
      <h2>The {name}</h2>
      <svelte:component this={comp} />
    </button>
    {/each}
  </div>
</Header>