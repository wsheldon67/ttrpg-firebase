<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'
  import Chat from './chat/index.svelte'
  import { campaign } from '$lib/campaign'

  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  let small = false
  
  onMount(async ()=>{
    const mql = window.matchMedia('(min-width: 48em)')
    small = !mql.matches
    mql.onchange = ({matches}) => {
      small = !matches
    }
    try {
      const { isSignedIn } = await import ('$lib/firebase')
      const signedIn = await isSignedIn()
      if (!signedIn) {
        await goto('/auth/login')
      } else if (!localStorage.getItem('campaignID')) {
        goto('/campaign')
      }
    } catch(err) {
      await goto('/auth/login')
    }
  })
  let returnval = campaign.set(localStorage.getItem('campaignID'))

</script>
{#await returnval}
Loading...
{:then}
<TopNav />
<div class='chatcont'>
  <div class='main'><slot /></div>
  {#if !small}
    <Chat />
  {/if}
</div>
<BottomNav {small}/>
{/await}

<style>
  .chatcont {
    height: 100%;
  }
  .main {
    overflow-y: scroll;
    height: 100%;
  }
  .chatcont > :global(.chat) {
    position: fixed;
    box-sizing: border-box;
    right: 1.5em;
    bottom: 0em;
    width: 25%;
    height: 100%;
    min-width: 14em;
    padding: 2em 0em;
  }
  @media only screen and (min-width: 48em) {
    .main {
      padding-right: calc(var(--right-side) + 1em);
    }
  }
</style>