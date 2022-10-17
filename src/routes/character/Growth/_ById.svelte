<script lang='ts'>
  import { onMount } from 'svelte'
  import Growth from './index.svelte'

  export let id:string
  let character

  onMount(async ()=> {
    console.log('on mount right')
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
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    await updateDoc(doc(db, 'characters', id), {
      character: detail
    })
  }
</script>
{#if character}
  <Growth {character} on:update={update}/>
{/if}