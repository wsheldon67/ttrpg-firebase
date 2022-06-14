<script lang='ts'>

  let id:string = ''
  let success:boolean = false
  async function join_campaign() {
    const { doc, updateDoc, arrayUnion } = await import ('firebase/firestore')
    const { db, isSignedIn } = await import ('$lib/firebase')
    const { uid } = await isSignedIn()
    const ref = doc(db, 'users', uid)
    await updateDoc(ref, {
      campaigns: arrayUnion(id)
    })
    const campaignRef = doc(db, 'campaigns', id)
    await updateDoc(campaignRef, {
      users: arrayUnion(uid)
    })
    id = ''
    success = true
  }
</script>
<form on:submit|preventDefault={join_campaign}>
  <label>
    Campaign ID:
    <input bind:value={id}/>
  </label>
</form>
{#if success}
Campaign Added! <a href='/campaign/select'>Switch Campaigns</a>
{/if}