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
    //const res = await index.search(query)
    const res = {
      hits: [
        {name: 'cow', objectID: 'ididididididi', body: 'this is the cow body'},
        {name: 'pig', objectID: 'ididwwidididi', body: 'this is the pig body you crazy son of a boy fallacy big nose branchy wandchy toomanterin gopher.'}
      ]
    }
    const result = res.hits.map((el) => {return {label: el.name, value: el.objectID, sub: el.body}})
    return result
  }

  function click(e) {
    console.log(e.detail)
  }

</script>
<Search {searchFunc} threshold={2} on:click={click}/>