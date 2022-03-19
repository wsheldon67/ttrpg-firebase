<script>
  import { page } from '$app/stores'
  import Note from '../_add/Note.svelte'

  let objectID = $page.params.objectID

  async function load_note ()  {
    const { db } = await import ('$lib/firebase')
    const { doc, getDoc } = await import ('firebase/firestore')
    const docSnap = await getDoc(doc(db, 'notes', objectID))
    console.log(docSnap.data())
    return docSnap.data()
  }

  const promise = load_note()
</script>
{#await promise}
  Loading...
{:then note} 
<Note {note} {objectID}/>
{/await}