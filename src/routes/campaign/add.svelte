<script>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'
  import { goto } from '$app/navigation'
  let name
  let uid

  onMount(async () => {
    const { isSignedIn } = await import('$lib/firebase')
    const user = await isSignedIn()
    uid = user.uid
  })

  async function click() {
    const { collection, addDoc } = await import('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const docRef = await addDoc(collection(db, 'campaigns'),{
      uid, name,
      users: [uid],
      tag_cats: ['GM Only']
    })
    console.log('doc written with id', docRef.id)
    
    // set firebase realtime listener to update store on changes
    campaign.set(docRef.id)
    // set campaign ID for use in sending things to firebase
    localStorage.setItem('campaignID', docRef.id)

    goto('/')
  }
  /* 
    1. create campaign doc with uid
    2. firebase realtime sets writable store
    3. changes are sent directly to firebase
  */
</script>
<h1>Create a New Campaign</h1>

<input placeholder='campaign name' bind:value={name}/>
<button class='p' on:click={click}>Create Campaign</button>

<style>
  h1 {
    margin: .5em 0em;
  }
</style>