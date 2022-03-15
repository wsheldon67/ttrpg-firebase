<script>
  import Add from '../_add.svelte'

  let require = [
    {label: 'body'}, {label: 'name'}
  ]
  let optional = [
    {label: 'CR', type: 'number'}, {label: 'Class'}, {label: 'Race'},
    {label: 'Str', type: 'number'}, {label: 'Dex', type: 'number'},
    {label: 'Int', type: 'number'}, {label: 'Wis', type: 'number'},
    {label: 'Cha', type: 'number'}, {label: 'Con', type: 'number'},
    
  ]

</script>
<Add {require} {optional} type='NPC'/>