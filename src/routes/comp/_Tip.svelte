<script lang='ts'>
  import Tooltip from '$lib/c/Tooltip.svelte'
  export let text:string
  export let path:string = text
  export let system:string

  let promise = async() => {
    const {db} = await import ('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const q = query(
      collection(db, 'compendium'),
      where('system','==', system),
      where('path', '==', path)
    )
    const snapshot = await getDocs(q)
    let res
    snapshot.forEach((doc) => {
      res = doc.data()
    })
    if (!res){
      res = {system: 'Common', path: 'NODBENTRY', quick: `"${path}"" was not found in firestore/compendium`}
    }
    return res
  }
</script>
{#await promise()}
<Tooltip tip='loading...'>
  {text}
</Tooltip>
{:then res}
<Tooltip tip={res.quick}>
  <a href={`/comp/${system}/${res.link||path}`}>{text}</a>
</Tooltip>
{/await}