<script>
  let note
  let uid

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