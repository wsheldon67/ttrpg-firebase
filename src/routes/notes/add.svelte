<script>
  import { onMount } from 'svelte'
  let note
  let uid
  
  onMount(async () => {
    const { isSignedIn } = await import('$lib/firebase')
    const user = await isSignedIn()
    uid = user.uid
  })

  async function click() {
    const { collection, addDoc } = await import('firebase/firestore')
    const { db } = await import('$lib/firebase')
    
    const docRef = await addDoc(collection(db, 'notes'), {
      user: uid,
      body: note
    })
    console.log('doc written with id', docRef.id)
  }

</script>
<textarea bind:value={note}></textarea>
<button on:click={click}>Submit</button>