<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import { search_client } from '$lib/algolia'
  import { campaign } from '$lib/campaign'
  import { goto } from '$app/navigation';

  const index = search_client.initIndex('compendium')

  async function searchFunc(query:string) {
    const filters = `system:${$campaign.system}`
    const res = await index.search(query, {filters})
    const forwards = res.hits.map((el:any) => {
      return {label: el.title, sub: el.quick, value: el.link || el.url}
    })
    forwards.reverse()
    return forwards
  }
  function click(e) {
    goto(`/comp/${$campaign.system}/${e.detail}`)
  }
</script>
<Search {searchFunc} on:click={click} threshold={1}/>