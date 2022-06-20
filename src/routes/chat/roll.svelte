<script lang='ts'>
  import { signed } from "$lib/pretty";

  export let note
</script>
<p>{note.label}:</p>
<p class:good={note.total >= 10} class:bad={note.total < 7}>
  <span class='p'>{note.d1}</span> + <span class='p'>{note.d2}</span> {signed(note.mod)} = {note.total}
</p>
<style>
  .good {
    color: var(--good);
  }
  .bad {
    color: var(--bad);
  }
</style>