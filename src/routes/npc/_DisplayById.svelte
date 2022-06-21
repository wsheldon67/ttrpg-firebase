<script lang='ts'>

import { onMount } from 'svelte'
import Display from './_Display.svelte'

export let id:string
let npc

onMount(async ()=> {
  const { db } = await import('$lib/firebase')
  const { doc, getDoc } = await import ('firebase/firestore')
  console.log('loading character', id)
  const docSnap = await getDoc(doc(db, 'npcs', id))
  npc = docSnap.data().npc
})
async function update({detail}) {
  if (!detail) {
    console.error('detail is false!',detail)
    return
  }
  const { db } = await import('$lib/firebase')
  const { doc, setDoc } = await import ('firebase/firestore')
  await setDoc(doc(db, 'npcs', id), {
    campaign: localStorage.getItem('campaignID'),
    npc: detail
  })
}
</script>
{#if npc}
<Display {npc} on:update={update} />
{/if}