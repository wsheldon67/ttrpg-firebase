<script lang='ts'>
  import Adder from '$lib/c/Adder.svelte'
  import Add from './notes/_add.svelte'

  let require = [{label: 'label1', type: 'number'},{label: 'label2'}]
  let optional = [{label: 'opti1'},{label: 'opti2'}]
  let links = [{label: 'NPC', value: 'npc'},{label: 'Place', value: 'place'}]

  let opts = [
    {label: 'yes', value: 'true', id: 'yes'},
    {label: 'no', value: 'false', id: 'no'}
  ]

</script>

<Add {require} {optional} type='test' {links} />
<Adder {opts} />