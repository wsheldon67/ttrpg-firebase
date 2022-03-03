<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'
  import { campaign } from '$lib/campaign'

  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  
  onMount(async ()=>{
    const { isSignedIn } = await import ('$lib/firebase')
    const signedIn = await isSignedIn()
    if (!signedIn) {
      goto('/auth/login')
    }
    if (!localStorage.getItem('campaignID')) {
      goto('/campaign')
    }
  })
  let returnval = campaign.set(localStorage.getItem('campaignID'))

</script>
{#await returnval}
Loading...
{:then}
<TopNav />
<slot />
<BottomNav />
{/await}