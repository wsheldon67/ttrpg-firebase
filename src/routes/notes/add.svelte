<script>
  import { onMount } from 'svelte'
  let body
  let uid
  let campaignID = localStorage.getItem('campaignID')
  let viewers = 'Everyone'
  
  onMount(async () => {
    const { isSignedIn } = await import('$lib/firebase')
    const user = await isSignedIn()
    uid = user.uid
  })

  async function click() {
    const { collection, addDoc } = await import('firebase/firestore')
    const { db } = await import('$lib/firebase')
    
    const docRef = await addDoc(collection(db, 'campaigns', campaignID, 'notes'), {
      uid, body, viewers: [viewers]
    })
    console.log('doc written with id', docRef.id)
  }

</script>
<label>
  <input type='radio' name='viewers' value='Everyone' bind:group={viewers}/>
  Everyone
</label>
<label>
  <input type='radio' name='viewers' value={uid} bind:group={viewers}/>
  Just Me
</label>
<textarea bind:value={body}></textarea>
<button on:click={click}>Submit</button>