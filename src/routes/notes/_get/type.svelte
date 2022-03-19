<script lang='ts'>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'
  import { get_notes_where } from './all';
  import type { NoteType } from '../note.type'

  export let type:NoteType
  let notes = []

  onMount(async () => {
    notes = await get_notes_where($campaign, 'type', '==', type)
  })
</script>
{#each notes as note}
  <a href={`/notes/edit/${note.objectID}`}>Edit</a>
  <ObjectViewer object={note} attributes={{body: undefined}}/>
{/each}