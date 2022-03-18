<script lang='ts'>
  import { truncate_string } from '../pretty';
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  type FilteredOpt = {
    value: any,
    label: string,
    sub?: string
  }

  export let searchFunc = async function (query_text: string): Promise<FilteredOpt[]>{
    return [{value: '', label: 'Please provide callback to searchFunc'}]
  }
  export let threshold = 0
  export let max_length = 50

  let show = false
  let filteredOpts: FilteredOpt[] = []

  function click(value) {
    dispatch('click', value)
    show = false
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
  .cont {
    position: relative;
  }
  .results {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2em;
    width: 100%;
    max-width: var(--break1);
    z-index: 2;
  }
  button {
    width: 100%;
    text-align: justify;
    border: 2px solid black;
  }
</style>
<div class='cont'>
<input
  on:blur={()=>{show=false}}
  on:focus={focus}
  on:input={change}
/>
{#if show}
<div class='results'>
  {#each filteredOpts as opt}
    <button
      on:click|preventDefault={() => {click(opt.value)}}
      on:mousedown|preventDefault={()=>{}}
    >
    {opt.label}
    {#if opt.sub}
      <hr />
      {truncate_string(opt.sub, max_length)}
    {/if}
  </button>
  {/each}
</div>
{/if}
</div>