<script lang='ts'>
  import Optional from './_add/optional.svelte'
  import Require from './_add/require.svelte'
  import Types from './_add/types.svelte'
  import Permissions from './_add/permissions.svelte'

  export let type:string
  export let require = []
  export let optional = []
  export let types = []

  let viewers = []

  let campaign = localStorage.getItem('campaignID')

  async function submit(e) {
    const { isSignedIn, db } = await import ('$lib/firebase')
    const { collection, addDoc } = await import ('firebase/firestore')
    const { uid } = await isSignedIn()

    const formData = new FormData(e.target.parentNode)
    const doc = {type, campaign, user: uid, viewers}
    // @ts-ignore
    for (let entry of formData.entries()) {
      doc[entry[0]] = entry[1]
    }
    console.log(doc)
    const docRef = await addDoc(collection(db, 'notes'), doc)
    console.log('doc written with id', docRef.id)
  }
  function change(e){
    viewers = e.detail.map(el => el.value)
  }
</script>
<style>
  form {
    display: flex;
    flex-direction: column;
    gap: .25em;
    background-color: var(--b1);
    padding: .5em;
  }
  form > :global(div), form > :global(label) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
<form>
  <Require {require} />
  <Optional {optional} />
  {#each types as ty}
    <Types {ty} />
  {/each}
  <Permissions {change}/>
  <button on:click|preventDefault={submit} class='p'>Save</button>
</form>