<script lang='ts'>
  import { subscribe_by_user_tag } from "$lib/notes";
  import { onMount } from "svelte";
import Note from "../notes/_note.svelte";
  
  export let name:string
  let notes = []

  onMount(subscribe_by_user_tag(name, res => notes = res, true))

</script>
{#each notes as note}
  <Note {note} />
{/each}