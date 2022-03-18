<script lang='ts'>
  import Optional from './_add/optional.svelte'
  import Require from './_add/require.svelte'
  import Types from './_add/types.svelte'
  import Permissions from './_add/permissions.svelte'

  import { submit_form } from './_add/submit_form'

  export let type:string
  export let require = []
  export let optional = []
  export let types = []

  let viewers = []
  let links = {}
  let all_links: string[] = []

  async function submit(e) {
    submit_form(e, {type, viewers, links}, all_links, type)
  }
  function change(e){
    viewers = e.detail.map(el => el.value)
  }
  function add_type(label: string, objectID: string) {
    // add type to this entry
    if (!links[label]){links[label] = []}
    links[label].push(objectID)
    all_links.push(objectID)
    // on submit, need to add types to their linked notes
  }
  function remove_type(label: string, objectID: string) {
    links[label] = links[label].filter(el => el !== objectID)
    all_links = all_links.filter(el => el !== objectID)
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
<form>
  <Require {require} />
  <Optional {optional} />
  {#each types as ty}
    <Types {ty} {add_type} {remove_type}/>
  {/each}
  <Permissions {change}/>
  <button on:click|preventDefault={submit} class='p'>Save</button>
</form>