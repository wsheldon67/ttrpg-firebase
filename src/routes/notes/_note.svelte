<script lang='ts'>
  import type { Note } from "$lib/notes";
  import { n2h_settings } from "$lib/name_to_color";
  import Edit from '$lib/i/edit.svg'
  import Up from '$lib/i/arrow-up.svg'
  import Down from '$lib/i/arrow-down.svg'
  import Trash from '$lib/i/trash-2.svg'
  import Tooltip from "$lib/c/Tooltip.svelte";

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
  async function del_note() {
    const { doc, deleteDoc } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    await deleteDoc(doc(db, 'notes', id))
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
      <div class='tag' style={`background-color: ${n2h_settings(tag, [50, 100], [60, 40])}`}>
        <button
          on:click={()=>{remove_tag(tag, id)}}
        >X</button>
        <a href={'/notes/tag-'+tag}>{tag}</a>
      </div>
    {/each}
    {#if editmode}
      <form on:submit|preventDefault={(e)=>{add_tag(e, id)}}>
        <input name='tag' list='used_tags' placeholder="Add a tag"/>
        <button class='p add'>+</button>
      </form>
      <button class='p' on:click={save_note}>Save</button>
      <button class='trash' on:click={del_note}><Trash /></button>
    {:else}
      <button on:click={()=>{editmode = true}}><Tooltip tip='Edit note'><Edit /></Tooltip></button>
    {/if}
    {#if note.gm}
      <button on:click={()=>{set_gm(false)}}><Tooltip tip='Show to players'><Up /></Tooltip></button>
    {:else}
      <button on:click={()=>{set_gm(true)}}><Tooltip tip='Change to GM only'><Down /></Tooltip></button>
    {/if}
  </div>
</div>

<style>
  .tag {
    margin-left: .25em;
    border-radius: .25em;
    padding: .125em .5em .25em .125em;
    width: max-content;
    height: max-content;
  }
  .tag > * {
    color: var(--at);
    font-weight: var(--at-weight);
    font-size: small;
  }
  .tag > a:hover {
    filter: brightness(.8);
  }
  .tag > button:hover + a {
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