<script lang='ts'>
import { add_note } from "$lib/notes"


  let body:string = ''

  function submit() {
    add_note({
      type: 'quick',
      body, tags: ['log']
    })
    body = ''
  }

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