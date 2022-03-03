<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'

  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  
  onMount(async ()=>{
    const { isSignedIn } = await import ('$lib/firebase')
    const signedIn = await isSignedIn()
    if (!signedIn) {
      goto('/auth/login')
    }
  })

</script>
<TopNav />
<slot />
<BottomNav />