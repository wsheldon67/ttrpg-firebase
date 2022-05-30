<script lang='ts'>
  import Build from './Build/index.svelte'
  import { blank } from '$lib/data/character'

  let char_id:string

  async function create():Promise<string> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { collection, addDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const docRef = await addDoc(collection(db, 'characters'), {
      player: uid,
      character: blank
    })
    return docRef.id
  }

  async function update({detail}) {
    if (detail.name === ''){return}
    if (!char_id) {char_id = await create()}
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, setDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    await setDoc(doc(db, 'characters', char_id), {
      player: uid,
      character: detail
    })
  }
</script>
<Build on:update={update} />