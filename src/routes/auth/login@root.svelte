<script>
  import { onMount } from 'svelte';
  import { campaign } from '$lib/campaign'

  onMount(async ()=> {
    const {ui, uiOptions, app } = await import('$lib/firebase')
    console.log(typeof app)
    //@ts-ignore
    ui.start('#firebaseui-auth-container', uiOptions)
    campaign.clear()
    localStorage.removeItem('campaignID')
  })
</script>
<style>
  div :global(label) {
    background-color: rgba(255,255,255,0);
  }
  div :global(h1) {
    background-color: white;
  }
  div :global(input:hover) {
    background-color: rgba(255,255,255,0);
  }
</style>
<div id='firebaseui-auth-container'></div>