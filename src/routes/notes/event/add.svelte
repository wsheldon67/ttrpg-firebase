<script lang='ts'>
  import Add from '../_add/Note.svelte'

  let require = [
    {label: 'body', type:'textarea'}
  ]
  let optional = [
    {label: 'title'}
  ]
  let links = [
    {label: 'NPCs', value: 'npc'}, {label: 'Places', value: 'place'}
  ]

</script>
<Add type='event' {require} {optional} {links} />