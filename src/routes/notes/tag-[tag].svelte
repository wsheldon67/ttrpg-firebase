<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {tag: params.tag}
    }
  }
</script>
<script lang='ts'>
import { subscribe_by_user_tag } from "$lib/notes";
import { onMount } from "svelte";
import Note from "./_note.svelte";

  export let tag:string
  let notes = []

  onMount(subscribe_by_user_tag(tag, res => notes = res))
</script>
<a href='/notes'>All Tags</a>
<h1>{tag}</h1>
{#each notes as note}
  <Note {note} />
{/each}