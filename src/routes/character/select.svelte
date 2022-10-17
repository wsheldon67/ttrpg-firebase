<script lang='ts'>
  import { onMount } from 'svelte'
  import EditIcon from '$lib/i/Edit.svg'
  import Up from '$lib/i/arrow-up.svg'
  import Down from '$lib/i/arrow-down.svg'
  import { server_log } from '$lib/error_logger';

  let characters = []
  let campaignID = localStorage.getItem('campaignID')

  $: camp = characters.filter(el => (el.campaign || []).includes(campaignID))
  $: other = characters.filter(el => !(el.campaign || []).includes(campaignID))

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { collection, query, where, onSnapshot } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const q = query(collection(db, 'characters'), where('player','==', uid))
    server_log({
      message: `Initializing listener for characters.player == ${uid}`,
      filename: `/character/select.svelte`,
      lineno: 19
    })
    return onSnapshot(q, (snapshot)=>{
      const res = []
      snapshot.forEach((doc) => {
        res.push({
          id: doc.id,
          character: doc.data().character,
          campaign: doc.data().campaign
        })
      })
      characters = res
      server_log({
        message: `Found ${res.length} results for characters.player == ${uid}`,
        filename: `/characters/select.svelte`,
        lineno: 33
      })
    })

  })
  async function add_char_to_campaign(id:string) {
    const { doc, updateDoc, arrayUnion} = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'characters', id)
    await updateDoc(ref, {
      campaign: arrayUnion(campaignID)
    })
  }
  async function remove_char_from_campaign(id:string) {
    const { doc, updateDoc, arrayRemove} = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'characters', id)
    await updateDoc(ref, {
      campaign: arrayRemove(campaignID)
    })
  }

</script>
{#if characters.length === 0}
  <p>You don't have any characters! Would you like to <a href='/character/new'>make one</a>?</p>
{/if}
<h1>This Campaign</h1>
{#each camp as {id, character}}
  <div class='one'>
    <a href={'/character/' + id}>{character.name}</a>
    <a href={'/character/edit-'+id}><EditIcon /></a>
    <button on:click={()=>{remove_char_from_campaign(id)}}><Down /></button>
  </div>
{/each}
<h1>Other Characters</h1>
{#each other as {id, character}}
  <div class='one'>
    <a href={'/character/' + id}>{character.name}</a>
    <a href={'/character/edit-'+id}><EditIcon /></a>
    <button on:click={()=>{add_char_to_campaign(id)}}><Up /></button>
  </div>
{/each}
<style>
  .one {
    display: grid;
    grid-template-columns: max-content 1em 1em;
    gap: .5em;
    padding-left: .5em;
  }
</style>