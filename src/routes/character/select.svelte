<script lang='ts'>
  import { onMount } from 'svelte'

  let characters = []

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const q = query(collection(db, 'characters'), where('player','==', uid))
    const snapshot = await getDocs(q)
    const res = []
    snapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        character: doc.data().character
      })
    })
    characters = res
  })
</script>
{#each characters as {id, character}}
  <a href={'/character/' + id}>{character.name}</a>
{/each}