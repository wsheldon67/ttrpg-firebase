<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import algoliasearch from 'algoliasearch/lite'
  import { onMount } from 'svelte'

  export let add_link
  export let remove_link
  export let ty:{label: string, value: string}
  export let note: any = undefined

  let index
  let members:{objectID: string, label: string}[] = []
  let campaignID = localStorage.getItem('campaignID')

  onMount(() => {
    const searchClient = algoliasearch('63TFNF6SIM', '3a935d9fd11ba4ca236618ee36fc1280')
    index = searchClient.initIndex('notes')
    
    if (note) {
      members = note.links[ty.value] || []
    }
  })

  async function searchFunc(query:string) {
    const res = await index.search(query, {filters: `type:${ty.value} AND campaign:${campaignID}`})
    return res.hits.map((el) => {
      return {label: el.name, value: {objectID: el.objectID, label: el.name}}
    })
  }
  async function click(e) {
    const {objectID} = e.detail
    add_link(ty.value, objectID)
    members = [...members, e.detail]
  }
  function click_remove(e) {
    const objectID = e.target.value
    members = members.filter(el => el.objectID !== objectID)
    remove_link(ty.value, objectID)
  }
</script>
<div>
  <!--svelte-ignore a11y-label-has-associated-control-->
  <label>
    {ty.label}
    <Search {searchFunc} on:click={click} fit/>
  </label>
  <div>
    {#each members as member}
      <button
        on:click|preventDefault={click_remove}
        value={member.objectID}
      >{member.label}</button>
    {/each}
  </div>
</div>