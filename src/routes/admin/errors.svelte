<script lang='ts'>
  import { onMount } from "svelte";
  import type {Timestamp} from 'firebase/firestore'
  import Tooltip from '$lib/c/Tooltip.svelte'

  type ErrorDoc = {
    colno: number
    display_name: string
    filename: string
    lineno: number
    message: string
    timestamp: Timestamp
    uid: string
  }

  let error_data:ErrorDoc[] = []

  onMount(async ()=> {
    const { collection, query, orderBy, limit, getDocs } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')

    const q = query(
      collection(db, 'errors'),
      orderBy('timestamp', 'desc'),
      limit(50)
    )

    const result = []
    const snapshot = await getDocs(q)
    snapshot.forEach((doc) => {
      result.push(doc.data())
    })
    error_data = result
  })
</script>
<table>
  <tr>
    <th>Time</th>
    <th>Error</th>
    <th>User</th>
    <th>Location</th>
  </tr>
  {#each error_data as {colno, display_name, uid, filename, lineno, message, timestamp}}
    <tr>
      <td>{timestamp.toDate().toISOString()}</td>
      <td>{message}</td>
      <td><Tooltip tip={display_name}>{uid}</Tooltip></td>
      <td>{filename}:{lineno}:{colno}</td>
    </tr>
  {/each}
</table>
