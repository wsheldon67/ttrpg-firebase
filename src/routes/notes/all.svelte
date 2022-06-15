<script lang='ts'>
  import { get_all_notes } from "$lib/notes"
</script>
{#await get_all_notes()}
  Loading...
{:then notes}
  {#each notes as {body}}
    <p>{body}</p>
  {/each}
{/await}