<script lang='ts'>
  import { subscribe_by_user_tag } from "$lib/notes";
  import { onMount } from "svelte";
  import Note from "./_note.svelte";
  
    export let tag:string
    export let gm:boolean = false
    let notes = []
  
    onMount(subscribe_by_user_tag(tag, res => notes = res, gm))
  </script>

  {#each notes as note}
    <Note {note} />
    <hr />
  {/each}