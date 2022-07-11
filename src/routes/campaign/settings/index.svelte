<script lang='ts'>
  import { campaign } from '$lib/campaign'
  import Build from './_Build.svelte';

  async function save({detail}) {
    if (!detail) {
      console.error('Campaign is blank! Cancelling upload.',detail)
      return
    }
    console.log(detail)
    return
    const {db} = await import ('$lib/firebase')
    const {doc, setDoc} = await import ('firebase/firestore')
    await setDoc(
      doc(db, 'campaigns', localStorage.getItem('campaignID')),
      detail
    )
  }
  // TODO finish campaign settings
</script>
<Build campaign={$campaign} on:update={save}/>