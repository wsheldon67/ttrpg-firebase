<script lang='ts'>
  import { onMount } from 'svelte'
  import Build from './index.svelte'

  export let id:string
  let character

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, getDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    console.log('loading character', id)
    const docSnap = await getDoc(doc(db, 'characters', id))
    character = docSnap.data().character
  })
  async function update({detail}) {
    if (!detail) {
      console.error('detail is false!',detail)
      return
    }
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, setDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    await setDoc(doc(db, 'characters', id), {
      player: uid,
      character: detail
    })
  }
</script>
{#if character}
  <Build {character} on:update={update} />
{/if}