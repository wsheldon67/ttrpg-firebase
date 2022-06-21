<script lang='ts'>
import { subscribe_by_user_tag, add_note } from "$lib/notes";

import { onMount } from "svelte";
import Note from "../notes/_note.svelte";
import GmNotes from "./_gm_notes.svelte";



  export let name:string
  let notes = []
  let current_text = ''

  onMount(subscribe_by_user_tag(name, res => notes = res))

  async function new_note() {
    add_note({
      body: current_text,
      type: 'npc',
      user_tags: [name]
    }, true, true)

    const { db } = await import ('$lib/firebase')
    const { doc, updateDoc, arrayUnion } = await import ('firebase/firestore')

    const campaignRef = doc(db, 'campaigns', localStorage.getItem('campaignID'))
    await updateDoc(campaignRef, {
      user_tags: arrayUnion(name)
    })
    current_text = ''
  }
</script>
<form on:submit|preventDefault={new_note}>
  <label>
    Add a Note:
    <textarea bind:value={current_text}></textarea>
  </label>
  <button type='submit' class='p'>Submit</button>
</form>
{#each notes as note}
  <Note {note} />
{/each}
<h2>GM Notes</h2>
<GmNotes {name} />
<style>
  label {
    display: flex;
    flex-direction: column;
  }
</style>