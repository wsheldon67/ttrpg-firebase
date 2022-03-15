<script>
  import Search from '$lib/c/Search.svelte'
  import algoliasearch from 'algoliasearch/lite'
  import { onMount } from 'svelte'

  let index

  onMount(() => {
    const searchClient = algoliasearch('63TFNF6SIM', '3a935d9fd11ba4ca236618ee36fc1280')
    index = searchClient.initIndex('notes')
  })


  export let ty
  let members = []
  let campaignID = localStorage.getItem('campaignID')

  async function searchFunc(query) {
    const res = await index.search(query, {filters: `type:${ty} AND campaign:${campaignID}`})
    return res.hits.map((el) => {return {label: el.name, value: el.objectID}})
  }
</script>
<div>
  <div>
    {#each members as member}
      <div>{member}</div>
    {/each}
  </div>
  <Search {searchFunc} />
</div>