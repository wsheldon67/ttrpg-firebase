<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { campaign } from "$lib/campaign";
  import { subscribe_to_log } from "$lib/notes"
  import { onMount } from 'svelte'
  import Note from "./_note.svelte";
  import Up from '$lib/i/chevron-up.svg'
  import Down from '$lib/i/chevron-down.svg'
  import type {Note as INote} from '$lib/notes'

  let notes:INote[] = []
  export let gm:boolean = false

  onMount(subscribe_to_log(res => notes = res, gm, true))

  async function move(note:INote, dir:number) {
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'notes', note.id)
    const created = {...note.created}
    const index = note_index(note)
    const neighbor = notes[index - dir].created
    created.seconds = neighbor.seconds
    created.nanoseconds = neighbor.nanoseconds + dir
    await updateDoc(ref, {created})
  }

  function note_index(note:INote):number {
    return notes.findIndex(el => el.id === note.id)
  }

</script>
<datalist id='used_tags'>
  {#each $campaign.user_tags || [] as used_tag}
    <option>{used_tag}</option>
  {/each}
</datalist>
{#each notes as note (note.id)}
  <div class='cont'>
    <div class='order'>
      {#if note_index(note) !== 0}
        <button on:click={()=>{move(note, 1)}}><Tooltip tip='Move note up'><Up /></Tooltip></button>
      {/if}
      {#if note_index(note) !== notes.length - 1}
        <button on:click={()=>{move(note, -1)}}><Tooltip tip='Move note down'><Down /></Tooltip></button>
      {/if}
    </div>
    <div>
      <Note {note} />
    </div>
  </div>
  <hr />
{/each}
<style>
  .cont {
    display: grid;
    grid-template-columns: 2em auto;
  }
  .order {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>