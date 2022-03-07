<script>
  import algoliasearch from 'algoliasearch/lite'
  import { onMount } from 'svelte';

  import Search from '$lib/c/Search.svelte'

  let index

  onMount(()=>{
    const searchClient = algoliasearch('63TFNF6SIM', '3a935d9fd11ba4ca236618ee36fc1280')
    index = searchClient.initIndex('notes')
  })

  async function searchFunc(query) {
    const res = await index.search(query)
    const result = res.hits.map((el) => {return {label: el.name, value: el.body}})
    console.log(result)
    return result
  }

  function click(e) {
    console.log(e.detail)
  }

</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous">
</svelte:head>
<Search {searchFunc} threshold={2} on:click={click}/>