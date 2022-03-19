<script lang='ts'>
  import { onMount } from 'svelte';
  import CustomLabel from './customLabel.svelte'

  export let optional: {label: string}[]
  export let note: any = undefined

  let len: any[] = [true]

  onMount(() => {
    if (note) {
      // all the options that already exist on note
      for (let opt of optional) {
        if (note[opt.label]) {
          len.push({label: opt.label, value: note[opt.label]})
        }
      }
    }
  })


  function add() {
    len = [...len, true]
  }
</script>
{#each len as opt}
  <div><CustomLabel
    list='optional'
    on:input={add}
    label={opt.label ? opt.label : ''}
    value={opt.value ? opt.value : ''}
  /></div>
{/each}
<datalist id='optional' style='display: none;'>
  {#each optional as opt}
    <option>{opt.label}</option>
  {/each}
</datalist>