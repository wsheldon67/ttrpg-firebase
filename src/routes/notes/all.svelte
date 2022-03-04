<script>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'

  let notes = []
  let campaignID = localStorage.getItem('campaignID')

  onMount(async () => {
    const { db, isSignedIn } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import('firebase/firestore')

    const user = await isSignedIn()
    const roles = $campaign.users[user.uid]
    const q = query(
      collection(db, 'campaigns', campaignID, 'notes'),
      where('viewers','array-contains-any', [user.uid, ...roles])
    )

    const querySnapshot = await getDocs(q)
    const res = []
    querySnapshot.forEach((doc) => {
      res.push(doc.data())
    })
    notes = res
  })
</script>
{#each notes as note}
  <ObjectViewer object={note} attributes={{body: undefined}}/>
{/each}