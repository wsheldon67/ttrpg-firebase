<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import algoliasearch from 'algoliasearch/lite'
  import { onMount } from 'svelte'

  export let add_type

  let index

  onMount(() => {
    const searchClient = algoliasearch('63TFNF6SIM', '3a935d9fd11ba4ca236618ee36fc1280')
    index = searchClient.initIndex('notes')
  })


  export let ty:{label: string, value: string}
  let members = []
  let campaignID = localStorage.getItem('campaignID')

  async function searchFunc(query:string) {
    const res = await index.search(query, {filters: `type:${ty.value} AND campaign:${campaignID}`})
    return res.hits.map((el) => {
      return {label: el.name, value: {objectID: el.objectID, label: el.name}}
    })
  }
  async function click(e) {
    const {objectID, label} = e.detail
    add_type(ty.label, objectID)
    members = [...members, label]
  }
</script>
<div>
  <div>
    {#each members as member}
      <button>{member}</button>
    {/each}
  </div>
  <!--svelte-ignore a11y-label-has-associated-control-->
  <label>
    {ty.label}
    <Search {searchFunc} on:click={click}/>
  </label>
</div>