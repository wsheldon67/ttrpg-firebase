<script lang='ts'>
  import { onMount } from "svelte";
  import Edit from '$lib/i/edit.svg'

  let npcs = []

  onMount(async ()=> {
    const { db } = await import ('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const q = query(
      collection(db, 'npcs'),
      where('campaign', '==', localStorage.getItem('campaignID'))
    )
    const snapshot = await getDocs(q)
    const res = []
    snapshot.forEach(doc => res.push({...doc.data().npc, id: doc.id}))
    npcs = res
  })
</script>

<a href='/npc/new'>New NPC</a>
<h1>Existing NPCs</h1>
  {#each npcs as {name, id}}
    <span class='cont'>
      <a href={`/npc/${id}`}>{name}</a>
      <a href={`/npc/edit-${id}`}><Edit /></a>
    </span>
  {/each}
<style>
  .cont {
    padding-left: 1em;
  }
</style>