<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import { search_client } from '$lib/algolia'
  import { goto } from '$app/navigation';

  const index = search_client.initIndex('compendium')

  async function searchFunc(query:string) {
    const filters = `system: atla`
    const res = await index.search(query, {filters})
    const forwards = res.hits.map((el:any) => {
      return {label: el.title, sub: el.quick, value: el.link || el.url}
    })
    forwards.reverse()
    console.log(forwards)
    return forwards
  }
  function click(e) {
    goto(`/comp/${e.detail}`)
  }
</script>
<Search {searchFunc} on:click={click} threshold={1}/>