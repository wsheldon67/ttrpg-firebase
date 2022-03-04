<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let searchFunc = val => val
  export let threshold = 0
  let show = false
  let filteredOpts = []

  function click(value) {
    dispatch('click', value)
  }
  function focus(e) {
    dispatch('focus')
    if (e.target.value.length >= threshold) {show = true}
  }
  function blur() {
    show = false
  }
  async function change(e) {
    if (e.target.value.length < threshold) {return}
    filteredOpts = await searchFunc(e.target.value)
  }
  // TODO create a version of this that searches from the db, after threshold
</script>
<style>
  input {
    width: 100%;
  }
</style>
<div on:blur={blur}>
<input
  on:focus={focus}
  on:input={change}
/>
{#if show}
  {#each filteredOpts as opt}
    <button on:click={() => {click(opt.value)}}>{opt.label}</button>
  {/each}
{/if}
</div>