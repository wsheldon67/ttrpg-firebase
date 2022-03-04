<script>
  import CustomLabel from './customLabel.svelte'
  export let optional
  let len = [true]
  function add() {
    len = [...len, true]
  }
</script>
{#each len as _}
  <div><CustomLabel list='optional' on:input={add}/></div>
{/each}
<datalist id='optional' style='display: none;'>
  {#each optional as opt}
    <option>{opt.label}</option>
  {/each}
</datalist>