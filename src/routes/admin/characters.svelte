<script lang='ts'>
  import { onMount } from 'svelte'
  import type {Data} from '$lib/data/character'
  import { playbook } from '$lib/data/playbooks'
  import Tooltip from '$lib/c/Tooltip.svelte'

  let characters:{id:string, character:Data}[] = []

  onMount(async ()=> {
    const { isSignedIn, db } = await import('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()
    const q = query(collection(db, 'characters'), where('campaign', 'array-contains', localStorage.getItem('campaignID')))
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
{#if characters.length === 0}
  <p>You don't have any characters! Would you like to <a href='/character/new'>make one</a>?</p>
{/if}

<table>
  <tr>
    <th>Character</th>
    <th>Principles</th>
  </tr>
  {#each characters as {id, character}}
    <tr>
      <td><a href={'/character/readOnly-' + id}>{character.name}</a></td>
      <td>
        <Tooltip tip={playbook[character.playbook].principles[0].text}>
          {playbook[character.playbook].principles[0].name}
        </Tooltip> /
        <Tooltip tip={playbook[character.playbook].principles[1].text}>
          {playbook[character.playbook].principles[1].name}
        </Tooltip>
      </td>
    </tr>
  {/each}
</table>