<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'
  import { campaign } from '$lib/campaign'

  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  
  onMount(async ()=>{
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
<slot />
<BottomNav />
{/await}