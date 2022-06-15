<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { name_to_color } from "$lib/name_to_color";
  import { subscribe_by_tag } from "$lib/notes"
  import { onMount } from 'svelte'

  let notes = []

  async function add_tag(e, id:string) {
    const input = e.target.elements.tag
    const tag = input.value
    const { doc, updateDoc, arrayUnion } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'notes', id)
    await updateDoc(ref, {
      user_tags: arrayUnion(tag)
    })
    const campaignRef = doc(db, 'campaigns', localStorage.getItem('campaignID'))
    await updateDoc(campaignRef, {
      user_tags: arrayUnion(tag)
    })
    input.value = ''
  }
  async function remove_tag(tag:string, id:string) {
    const { doc, updateDoc, arrayRemove } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'notes', id)
    await updateDoc(ref, {
      user_tags: arrayRemove(tag)
    })
  }
  onMount(subscribe_by_tag('log',res => notes = res))
</script>
<datalist id='used_tags'>
  {#each $campaign.user_tags || [] as used_tag}
    <option>{used_tag}</option>
  {/each}
</datalist>
{#each notes as {body, id, user_tags}}
  <div>
    <p>{body}</p>
    <div>
      {#each user_tags || [] as tag}
        <button
          on:click={()=>{remove_tag(tag, id)}}
          class='tag'
          style={`background-color: ${name_to_color(tag)}`}
        >{tag}</button>
      {/each}
    </div>
    <form on:submit|preventDefault={(e)=>{add_tag(e, id)}}>
      <input name='tag' list='used_tags'/>
      <button class='p'>+</button>
    </form>
  </div>
{/each}
<style>
  .tag {
    color: var(--at);
    font-weight: var(--at-weight);
    margin-left: .25em;
  }
  .tag:hover {
    text-decoration: line-through;
  }
</style>