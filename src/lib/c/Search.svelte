<script>
  import { truncate_string } from '../pretty';
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let searchFunc = val => val
  export let threshold = 0
  export let max_length = 50

  let show = false
  let filteredOpts = []

  function click(value) {
    dispatch('click', value)
  }
  
  function focus(e) {
    dispatch('focus')
    if (e.target.value.length >= threshold) {show = true}
  }

  async function change(e) {
    if (e.target.value.length < threshold) {return}
    show = true
    filteredOpts = await searchFunc(e.target.value)
  }

</script>
<style>
  input {
    width: 100%;
  }
</style>
<input
  on:blur={()=>{show=false}}
  on:focus={focus}
  on:input={change}
/>
{#if show}
  {#each filteredOpts as opt}
    <button
      on:click={() => {click(opt.value)}}
      on:mousedown|preventDefault={()=>{}}
    >
    {opt.label}
    {#if opt.sub}
      <hr />
      {truncate_string(opt.sub, max_length)}
    {/if}
  </button>
  {/each}
{/if}