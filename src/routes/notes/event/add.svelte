<script lang='ts'>
  import Add from '../_add/Note.svelte'
  import NoteType from '../_add/note_types'

</script>
<h1>Add an event</h1>
<Add type='event' {...NoteType.event} />