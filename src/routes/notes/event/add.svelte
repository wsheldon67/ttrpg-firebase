<script lang='ts'>
  import Add from '../_add.svelte'

  let require = [
    {label: 'body'}
  ]
  let optional = [
    {label: 'title'}
  ]
  let types = [
    {label: 'NPCs', value: 'npc'}, {label: 'Places', value: 'place'}
  ]

</script>
<Add type='event' {require} {optional} {types} />