<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  let label = ''
  export let list
  function input() {
    dispatch('input')
  }
</script>
<input bind:value={label} {list} on:input|once={input}/>
<input name={label} />