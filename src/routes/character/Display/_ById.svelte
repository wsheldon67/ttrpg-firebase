<script lang='ts'>
    import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte'
  import Display from './index.svelte'

  export let id:string
  export let readOnly:boolean = false
  let character

  const load_char = async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, getDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    console.log('loading character', id)
    const docSnap = await getDoc(doc(db, 'characters', id))
    character = docSnap.data().character
  }

  onMount(load_char)
  afterNavigate(load_char)
  async function update({detail}) {
    if (!detail) {
      console.error('Preventing overwiting with undefined character...',detail)
      return
    }
    if (readOnly) {return}
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    await updateDoc(doc(db, 'characters', id), {
      character: detail
    })
  }
</script>
{#if character}
  <Display {character} on:update={update} {id}/>
{/if}