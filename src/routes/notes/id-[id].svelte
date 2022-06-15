<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {id: params.id}
    }
  }
</script>
<script lang='ts'>
  import { subscribe_by_id } from "$lib/notes";
  import { onMount } from "svelte";
  import Note from "./_note.svelte";

  export let id:string
  let note

  onMount(subscribe_by_id(id, res => note = res))
</script>
{#if note}
  <Note {note} />
{/if}