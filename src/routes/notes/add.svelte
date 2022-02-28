<script>
  import { onMount } from 'svelte'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  let note
  let uid

  onMount(async ()=> {
    //const app = await import('$lib/firebase')
    //const { getAuth, onAuthStateChanged } = await import('firebase/auth')
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) { uid = user.uid }
      else {
        console.log('user is not signed in (TODO Redirect)')
      }
    })
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