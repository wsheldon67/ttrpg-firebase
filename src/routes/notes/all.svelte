<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { subscribe_by_tag } from "$lib/notes"
  import { onMount } from 'svelte'
  import Note from "./_note.svelte";

  let notes = []

  onMount(subscribe_by_tag('log',res => notes = res))
</script>
<datalist id='used_tags'>
  {#each $campaign.user_tags || [] as used_tag}
    <option>{used_tag}</option>
  {/each}
</datalist>
<a href='/notes'>Browse Tags</a>
{#each notes as note}
  <Note {note} />
{/each}