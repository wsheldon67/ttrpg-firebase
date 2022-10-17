<script lang='ts'>
  import { onMount } from "svelte";
  import Tooltip from '$lib/c/Tooltip.svelte'
  import type { FullLog } from "$lib/error_logger";


  let error_data:FullLog[] = []

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
    <th>Message</th>
    <th>User</th>
    <th>Location</th>
  </tr>
  {#each error_data as {colno, display_name, uid, filename, lineno, message, timestamp, log_type}}
    <tr class:error={log_type == 'Error'}>
      <td>{timestamp.toDate().toLocaleString()}</td>
      <td>{message}</td>
      <td><Tooltip tip={display_name}>{uid}</Tooltip></td>
      <td>{filename}:{lineno}:{colno}</td>
    </tr>
  {/each}
</table>

<style>
  .error > td {
    color: var(--bad);
  }
</style>