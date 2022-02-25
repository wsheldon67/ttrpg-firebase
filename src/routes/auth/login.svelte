<script>
  import { onMount } from 'svelte';

  onMount(async ()=> {
    const {ui, uiOptions, app } = await import('$lib/firebase')
    console.log(typeof app)
    ui.start('#firebaseui-auth-container', uiOptions)
  })
</script>
<div id='firebaseui-auth-container'></div>
<div id='loader'>Loading...</div>