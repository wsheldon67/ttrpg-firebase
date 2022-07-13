<script lang='ts'>
  import { onMount } from "svelte";
  import Edit from '$lib/i/edit.svg'
  import { get_unique_from_array } from "$lib/handy";
  import { name_to_color } from "$lib/name_to_color";

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

  $: tags = get_unique_from_array(npcs,'tags')

</script>

<a href='/npc/new'>New NPC</a>
<h1>Existing NPCs</h1>
<h2>Untagged</h2>
{#each npcs.filter(el => !el.tags || el.tags.length === 0) as {name, id}}
  <span class='cont'>
    <a href={`/npc/${id}`}>{name}</a>
    <a href={`/npc/edit-${id}`}><Edit /></a>
  </span>
{/each}
{#each tags as tag}
  <h2 style={`color: ${name_to_color(tag)}`}>{tag}</h2>
    {#each npcs.filter(el => el.tags).filter(el => el.tags.includes(tag)) as {name, id}}
    <span class='cont'>
      <a href={`/npc/${id}`}>{name}</a>
      <a href={`/npc/edit-${id}`}><Edit /></a>
    </span>
    {/each}
{/each}

<style>
  .cont {
    padding-left: 1em;
  }
</style>