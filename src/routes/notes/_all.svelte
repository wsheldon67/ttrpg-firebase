<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { subscribe_to_log } from "$lib/notes"
  import { onMount } from 'svelte'
  import Note from "./_note.svelte";

  let notes = []
  export let gm:boolean = false

  onMount(subscribe_to_log(res => notes = res, gm, true))
</script>
<datalist id='used_tags'>
  {#each $campaign.user_tags || [] as used_tag}
    <option>{used_tag}</option>
  {/each}
</datalist>
{#each notes as note (note.id)}
  <Note {note} />
{/each}