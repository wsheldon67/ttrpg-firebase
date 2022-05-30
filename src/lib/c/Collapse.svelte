<script>
  export let collapsed = false
  export let label = 'Please define a label for this Collapse.'

  let loaded = !collapsed

  function toggle_collapse() {
    collapsed = !collapsed
    loaded = true
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
  div.collapsed {
    display: none;
  }
</style>
<div class:open={!collapsed}>
  <button on:click={toggle_collapse} class:open={!collapsed}>{label}</button>
  {#if loaded}
    <div class:collapsed={collapsed}>
      <slot />
    </div>
  {/if}
</div>