<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let list
  export let label = ''
  export let value = undefined
  function input() {
    dispatch('input')
  }
</script>
<input bind:value={label} {list} on:input|once={input} placeholder='Custom Attribute'/>
<input name={label} {value} placeholder='Value'/>