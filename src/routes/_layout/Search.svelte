<script lang='ts'>
  import Search from '$lib/c/Search.svelte'
  import { search_client } from '$lib/algolia'
  import { campaign } from '$lib/campaign'
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
          filters: `campaign:${campaignID} AND viewers:${uid}`
        }
      }, {
        indexName: 'compendium',
        query,
        params: {
          filters: `system:${$campaign.system}`
        }
      }
    ]
    /* @ts-ignore*/
    const {results} = await search_client.multipleQueries(queries)
    const res = [
      // notes
      ...results[0].hits.map((el) => {
        return {label: el.data.name, sub: el.data.body, value: {id: el.objectID, type: 'note'}}
      }),
      // compendium
      ...results[1].hits.map((el) => {
        return {label: el.title, sub: el.description, value:{url: el.link || el.url}}
      })
    ]
    return res
  }

  function click(e) {
    if (e.detail.type === 'note') {
      goto(`/notes/edit/${e.detail.id}`)
    } else {
      goto(`/comp/${$campaign.system}/${e.detail.url}`)
    }
  }

</script>
<Search {searchFunc} threshold={2} on:click={click}/>