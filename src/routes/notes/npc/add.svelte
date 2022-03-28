<script>
  import Add from '../_add/Note.svelte'
  import NoteTypes from '../_add/note_types'

</script>
<h1>New NPC</h1>
<Add {...NoteTypes.npc} type='npc' redirect='/notes/npc'/>