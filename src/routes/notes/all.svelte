<script>
  import { onMount } from 'svelte'

  let notes = {}

  onMount(async () => {
    const { db, isSignedIn } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import('firebase/firestore')
    const user = await isSignedIn()
    const q = query(collection(db, 'notes'), where('user','==', user.uid))
    const querySnapshot = await getDocs(q)
    const res = []
    querySnapshot.forEach((doc) => {
      res.push(doc.data())
    })
    notes = res
  })
</script>
{JSON.stringify(notes)}