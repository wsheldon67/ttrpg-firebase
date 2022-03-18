<script lang='ts'>
  import Optional from './_add/optional.svelte'
  import Require from './_add/require.svelte'
  import Types from './_add/links.svelte'
  import Permissions from './_add/permissions.svelte'

  import { submit_form, add_link, remove_link, change_permissions } from './_add/submit_form'

  export let type:"npc"|"event"|"place"
  export let require: {type?: string, label: string}[] = []
  export let optional: {label: string}[] = []
  export let links: {label: string, value: string}[] = []

  async function submit(e) {
    submit_form(e, type)
  }
  // TODO this component should accept starting/default values
  // TODO this component should optionally accept an objectID to update instead of writing a new note
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
  <Require {require} />
  <Optional {optional} />
  {#each links as ty}
    <Types {ty} {add_link} {remove_link}/>
  {/each}
  <Permissions {change_permissions}/>
  <button on:click|preventDefault={submit} class='p'>Save</button>
</form>