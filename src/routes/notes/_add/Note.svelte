<script lang='ts'>
  // TODO make this pretty (css)
  import Optional from './optional.svelte'
  import Require from './require.svelte'
  import Links from './links.svelte'
  import Permissions from './permissions.svelte'

  import { submit_form, add_link, remove_link, change_permissions, load, change_tags } from './submit_form'
  import type { NoteType } from '../note.type';
  import { createEventDispatcher, onMount } from 'svelte';
  import NoteTypes from './note_types'
  import Tags from './tags.svelte';
  import { goto } from '$app/navigation';
  const dispatch = createEventDispatcher()
  import { campaign } from '$lib/campaign'

  export let type:NoteType = 'event'
  export let require: {type?: string, label: string}[] = NoteTypes[type].require
  export let optional: {label: string}[] = NoteTypes[type].optional
  export let links: {label: string, value: string}[] = NoteTypes[type].links

  export let note:any = undefined
  export let objectID = undefined
  export let redirect:string = undefined

  onMount(()=> {
    if (note) {
      load(note)
      type = note.type
    }
  })

  async function submit(e) {
    try {
      const doc = await submit_form(e, type, $campaign, objectID)
      next(doc)
    } catch (error) {
      console.log(error)
    }
  }
  function next(doc) {
    if (redirect) {goto(redirect)}
    dispatch('success', doc)
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
<!--
@component
A form used to update notes.
-->
<form>
  <textarea name='body' value={note?note.data.body:''}></textarea>
  <Require {require} {note} />
  <Optional {optional} {require} {note} />
  {#each links as ty}
    <Links {ty} {add_link} {remove_link} {note}/>
  {/each}
  <Tags on:change={change_tags} {note} />
  <Permissions {change_permissions} {note}/>
  <button on:click|preventDefault={submit} class='p'>Save</button>
</form>