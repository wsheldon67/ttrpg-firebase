<script lang='ts'>
  import { onMount } from 'svelte'
  import Display from './index.svelte'

  export let id:string
  let character

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { doc, getDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const docSnap = await getDoc(doc(db, 'characters', id))
    character = docSnap.data().character
  })
</script>
<Display {character} />