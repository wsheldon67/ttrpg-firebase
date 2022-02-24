<script>
  import '../app.css'
  import TopNav from './_layout/TopNav.svelte'
  import BottomNav from './_layout/BottomNav.svelte'

  import { onMount } from 'svelte';

  onMount(async ()=> {
    const {ui, uiOptions, app } = await import('$lib/firebase')
    console.log(typeof app)
    ui.start('#firebaseui-auth-container', uiOptions)
  })


</script>
<TopNav />
<div id='firebaseui-auth-container'></div>
<div id='loader'>Loading...</div>
<slot />
<BottomNav />