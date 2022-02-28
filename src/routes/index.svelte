<script>
  import { onMount } from 'svelte'
  import { db } from '$lib/firebase'
  import { doc, onSnapshot } from 'firebase/firestore'
  
  export let res

  onMount(async ()=> {
    return onSnapshot(doc(db, 'notes', 'id'), (doc)=> {
      res = doc.data()
    })
  })
  
</script>
{JSON.stringify(res)}