<script lang='ts'>
  import { add_note } from "$lib/notes"

  let body:string = ''

  function submit() {
    add_note({
      type: 'quick',
      body, tags: ['log']
    }, true)
    body = ''
  }
  // TODO player note, name of character as user_tag ideally
  // automatically categorize tag into PC category.
</script>
<form on:submit|preventDefault={submit}>
  <textarea bind:value={body}></textarea>
  <button class='p'>Submit</button>
</form>
<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
  }
  textarea {
    min-width: 12em;
    min-height: 6em;
  }
</style>