<script context='module'>
  export async function load({url}) {
    return {
      props: {
        searchParams: url.searchParams
      }
    }
  }
</script>
<script>
  import { page } from '$app/stores'
  import Note from '../_add/Note.svelte'

  let objectID = $page.params.objectID
  export let searchParams
  console.log(searchParams)
  $: redirect = searchParams?`/notes/${searchParams.get('type')}`:''

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
<Note {note} {objectID} {redirect}/>
{/await}