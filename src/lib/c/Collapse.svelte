<script>
  export let collapsed = false
  export let label = 'Please define a label for this Collapse.'

  $: className = collapsed ? '' : 'open'

  let loaded = !collapsed

  function toggle_collapse() {
    collapsed = !collapsed
    loaded = true
    console.log(loaded)
  }
</script>
<style>
  button {
    width: 100%;
  }
  div.open {
    border: 1px solid var(--b4);
    margin: 0em .25em;
    padding-bottom: .25em;
  }
  button.open {
    background-color: var(--b4);
  }
</style>
<div class={className}>
  <button on:click={toggle_collapse} class={className}>{label}</button>
  {#if loaded}
    <slot />
  {/if}
</div>