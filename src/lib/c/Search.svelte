<script lang='ts'>
  import { truncate_string } from '../pretty';
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import Popper from './Popper.svelte'

  type FilteredOpt = {
    value: any,
    label: string,
    sub?: string
  }

  export let searchFunc = async function (query_text: string): Promise<FilteredOpt[]>{
    console.log('query_text passed to searchFunc', query_text)
    return [{value: '', label: 'Please provide callback to searchFunc'}]
  }
  export let threshold = 0
  export let max_length = 256
  export let fit = false

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
    console.log('current filteredOpts {value, label, sub?}',filteredOpts)
  }

</script>
<style>
  input {
    width: 100%;
  }
  .fit {
    width: 100%;
  }
  .expand {
    width: 96vw;
  }
  .cont {
    position: relative;
  }
  .sub {
    font-size: small;
  }
  .label {
    font-weight: bold;
  }
  button {
    width: 100%;
    text-align: justify;
    border: 2px solid black;
  }
  hr {
    margin: 0em;
  }
</style>
<div class='cont'>

<Popper {show}>
<input
  on:blur={()=>{show=false}}
  on:focus={focus}
  on:input={change}
  slot='reference'
/>
<div class={fit?'fit':'expand'} slot='content'>
  {#each filteredOpts as opt}
    <button
      on:click|preventDefault={() => {click(opt.value)}}
      on:mousedown|preventDefault={()=>{}}
    >
    <span class='label'>{opt.label}</span>
    {#if opt.sub}
      <hr />
      <span class='sub'>{truncate_string(opt.sub, max_length)}</span>
    {/if}
  </button>
  {/each}
</div>
</Popper>
</div>