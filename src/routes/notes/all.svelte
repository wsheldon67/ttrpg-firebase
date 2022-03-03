<script>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'

  let notes = {}
  let campaignID = localStorage.getItem('campaignID')

  onMount(async () => {
    const { db, isSignedIn } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import('firebase/firestore')
    const user = await isSignedIn()
    const roles = $campaign.users[user.uid]
    console.log(campaignID)
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
  // i am user
  // i have campaign
  // i can have notes where i am explicitly listed, or where a group i am a member of is listed
</script>
{JSON.stringify(notes)}