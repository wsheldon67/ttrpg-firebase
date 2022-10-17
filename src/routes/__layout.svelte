<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'
  import Chat from './chat/index.svelte'
  import { campaign } from '$lib/campaign'

  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { chat } from '$lib/chat'
  import { on_error } from '$lib/error_logger'

  let small = false
  
  onMount(async ()=>{
    const mql = window.matchMedia('(min-width: 48em)')
    small = !mql.matches
    mql.onchange = ({matches}) => {
      small = !matches
    }
    window.addEventListener("error", on_error)
    // @ts-ignore
    try {
      const { isSignedIn } = await import ('$lib/firebase')
      const signedIn = await isSignedIn()
      if (!signedIn) {
        console.log(signedIn)
        await goto('/auth/login')
      } else if (!localStorage.getItem('campaignID')) {
        goto('/campaign/change')
      }
      chat.set(localStorage.getItem('campaignID'))
    } catch(err) {
      await goto('/auth/login')
    }
  })
  let returnval = campaign.set(localStorage.getItem('campaignID'))

</script>
<button on:click={()=>{eval('const s;')}}>
  Create Error
</button>
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
    right: 0em;
    bottom: 0em;
    width: var(--right-side);
    height: 100%;
    padding: 2em 0em;
  }
  @media only screen and (min-width: 48em) {
    .main {
      padding-right: calc(var(--right-side) + 1em);
      padding-left: .25em;
    }
  }
</style>