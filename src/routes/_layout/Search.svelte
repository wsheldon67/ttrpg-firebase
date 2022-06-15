<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import { search_client } from '$lib/algolia'
  import { goto } from '$app/navigation'
  const campaignID = localStorage.getItem('campaignID')
  async function searchFunc(query) {
    const { isSignedIn } = await import ('$lib/firebase')
    const {uid} = await isSignedIn()
    const queries = [
      {
        indexName: 'notes',
        query,
        params: {
          filters: `campaign:${campaignID} AND gm:false AND log:true`
        }
      }, {
        indexName: 'compendium',
        query,
        params: {
          filters: `system:atla`
        }
      }
    ]
    console.log('queries', queries)
    /* @ts-ignore*/
    const {results} = await search_client.multipleQueries(queries)
    console.log('raw results', results)
    const res = [
      // notes
      ...results[0].hits.map((el) => {
        return {label: el.title || 'Note', sub: el.body, value: {id: el.objectID, type: 'note'}}
      }),
      // compendium
      ...results[1].hits.map((el) => {
        return {label: el.title, sub: el.description, value:{url: el.link || el.url}}
      })
    ]
    console.log('processed results', res)
    return res
  }

  function click(e) {
    if (e.detail.type === 'note') {
      goto(`/notes/id-${e.detail.id}`)
    } else {
      goto(`/comp/${e.detail.url}`)
    }
  }

</script>
<Search {searchFunc} threshold={2} on:click={click}/>