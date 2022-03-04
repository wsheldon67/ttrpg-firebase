<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let opts = []
  export let threshold = 0
  let show = false
  let filteredOpts = []

  function click(value) {
    dispatch('click', value)
  }
  function focus(e) {
    if (e.target.value.length >= threshold) {show = true}
  }
  function blur() {
    show = false
  }
  function change(e) {
    const search_term = e.target.value.toLowerCase()
    filteredOpts = opts.filter(el => el.label.toLowerCase().includes(search_term))
    console.log(filteredOpts)
  }
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