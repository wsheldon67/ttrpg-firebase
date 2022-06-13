<script lang='ts'>
  import { onMount } from 'svelte'

  let characters = []

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const q = query(collection(db, 'characters'))
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
  // FIXME opening other people's characters assigns them to you
</script>
{#if characters.length === 0}
  <p>You don't have any characters! Would you like to <a href='/character/new'>make one</a>?</p>
{/if}
{#each characters as {id, character}}
  <div class='one'>
    <a href={'/character/readOnly-' + id}>{character.name}</a>
  </div>
{/each}
<style>
  .one {
    display: grid;
    grid-template-columns: max-content 2em;
    gap: .5em;
    padding-left: .5em;
  }
</style>