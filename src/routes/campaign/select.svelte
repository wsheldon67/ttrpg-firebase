<script>
  import { onMount } from 'svelte'
  import { campaign as campaignStore } from '$lib/campaign'
  import { goto } from '$app/navigation'

  let campaigns = []

  onMount(async () => {
    const { collection, query, where, getDocs } = await import('firebase/firestore')
    const { db, isSignedIn } = await import('$lib/firebase')
    const { uid } = await isSignedIn()

    const q = query(collection(db, 'campaigns'), where('users', 'array-contains', uid))
    let res = []
    const snapshot = await getDocs(q)
    snapshot.forEach(doc => res.push(doc))
    campaigns = res
  })

  async function changeCampaign(e) {
    const id = e.target.value
    campaignStore.set(id)
    localStorage.setItem('campaignID', id)
    goto('/')
  }
</script>
<h1>Select Existing Campaign</h1>
<select on:change={changeCampaign}>
  <option>- Select -</option>
  {#each campaigns as campaign}
    <option value={campaign.id}>{campaign.data().name}</option>
  {/each}
</select>
<style>
  h1 {
    margin: .5em 0em;
  }
</style>