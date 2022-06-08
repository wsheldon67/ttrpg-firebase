<script lang='ts'>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let selected:boolean = false

  function click() {
    dispatch('click')
  }
</script>

<button
  on:click={click}
  class={selected ? 'p': 'unselected'}
>
  {selected ? '-' : '+'}
</button>
<style>
  .unselected {
    background-color: var(--b4);
  }
  button {
    width: 2em;
    height: 100%;
    margin: 0em;
  }
</style>