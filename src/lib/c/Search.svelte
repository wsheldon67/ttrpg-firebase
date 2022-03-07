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
    show = true
    filteredOpts = await searchFunc(e.target.value)
  }
  function mousedown(e) {
    e.preventDefault()
  }
</script>
<style>
  input {
    width: 100%;
  }
</style>
<input
  on:blur={blur}
  on:focus={focus}
  on:input={change}
/>
{#if show}
  {#each filteredOpts as opt}
    <button
      on:click={() => {click(opt.value)}}
      on:mousedown={mousedown}
    >{opt.label}</button>
  {/each}
{/if}