<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let list
  export let label = ''
  export let value = undefined
  export let index

  function input(e) {
    dispatch('input', {index, label, value})
  }
</script>
<input bind:value={label} {list} on:input={input} placeholder='Custom Attribute'/>
<input name={label} bind:value={value} on:input={input} placeholder='Value'/>