<script>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'
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
      users: {
        [uid]: ['GM Only','Everyone']
      }
    })
    console.log('doc written with id', docRef.id)
    
    // set firebase realtime listener to update store on changes
    campaign.set(docRef.id)
    // set campaign ID for use in sending things to firebase
    localStorage.setItem('campaignID', docRef.id)
  }
  /* 
    1. create campaign doc with uid
    2. firebase realtime sets writable store
    3. changes are sent directly to firebase
  */
</script>
<input placeholder='campaign name' bind:value={name}/>
<label>
  Campaign Type:
  <select>
    <option>Dungeons & Dragons (5e)</option>
    <option>Avatar Legends</option>
  </select>
</label>
<button on:click={click}>Submit</button>
<a href='/campaign/data'>See Data</a>