<script lang='ts'>
  import type { Note } from "$lib/notes";
  import { name_to_color } from "$lib/name_to_color";
  import Edit from '$lib/i/edit.svg'
  import Up from '$lib/i/arrow-up.svg'
  import Down from '$lib/i/arrow-down.svg'

  export let note:Note
  $: body = note.body
  $: user_tags = note.user_tags
  $: id = note.id

  let textarea_body = note.body

  let editmode = false

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
  async function save_note() {
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'notes', id)
    await updateDoc(ref, {body: textarea_body})
    editmode = false
  }

  async function set_gm(gm:boolean) {
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'notes', id)
    await updateDoc(ref, {gm})
  }
</script>
<div class='cont'>
  {#if editmode}
    <textarea bind:value={textarea_body}></textarea>
  {:else}
    <p>{body}</p>
  {/if}
  <div class='tagstuff'>
    {#each user_tags || [] as tag}
      <button
        on:click={()=>{remove_tag(tag, id)}}
        class='tag'
        style={`background-color: ${name_to_color(tag)}`}
      >{tag}</button>
    {/each}
    {#if editmode}
      <form on:submit|preventDefault={(e)=>{add_tag(e, id)}}>
        <input name='tag' list='used_tags' placeholder="Add a tag"/>
        <button class='p add'>+</button>
      </form>
      <button class='p' on:click={save_note}>Save</button>
    {:else}
      <button on:click={()=>{editmode = true}}><Edit /></button>
    {/if}
    {#if note.gm}
      <button on:click={()=>{set_gm(false)}}><Up /></button>
    {:else}
      <button on:click={()=>{set_gm(true)}}><Down /></button>
    {/if}
  </div>
</div>
<hr />

<style>
  .tag {
    color: var(--at);
    font-weight: var(--at-weight);
    margin-left: .25em;
    border-radius: .25em;
  }
  .tag:hover {
    text-decoration: line-through;
  }
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tagstuff {
    display: flex;
    flex-direction: row;
  }
  input {
    margin-left: .25em;
    width: 8em;
  }
  .add {
    margin-right: .25em;
  }
  button {
    height: 1.8em;
  }
  textarea {
    width: 50%;
    height: 6em;
  }
  p {
    white-space: pre-line;
  }
</style>