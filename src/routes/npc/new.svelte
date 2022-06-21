<script lang='ts'>
  import { goto } from '$app/navigation';
  import Edit from './edit.svelte'
  import { blank } from './npc'

  let id:string

  async function create():Promise<string> {
    const { db } = await import('$lib/firebase')
    const { collection, addDoc } = await import ('firebase/firestore')
    const campaign = localStorage.getItem('campaignID')
    const docRef = await addDoc(collection(db, 'npcs'), {
      campaign, npc: blank
    })
    return docRef.id
  }

  async function save({detail}) {
    if (detail.name === ''){return}
    if (!id) {id = await create()}
    const { db } = await import('$lib/firebase')
    const { doc, setDoc } = await import ('firebase/firestore')
    await setDoc(doc(db, 'npcs', id), {
      campaign: localStorage.getItem('campaignID'),
      npc: detail
    })
    goto('/npc')
  }
</script>
<Edit on:save={save} />