<script lang='ts'>
  import { onMount } from 'svelte';
  import CustomLabel from './customLabel.svelte'

  export let optional: {label: string}[]
  export let require: {label: string, type?: string}[]
  export let note: any = undefined

  let len: any[] = [{label: ''}]

  onMount(() => {
    if (note) {
      // any attributes that are not required
      for (let key in note.data) {
        if (!require.find(el => el.label === key)) {
          len.push({label: key, value: note.data[key]})
        }
      }
      len = len
    }
  })

  function add(e: {detail:{index: number, label: string, value: any}}) {
    const {index, label, value} = e.detail
    len[index] = {label, value}
    if (index === len.length - 1) {
      // we're updating the last one, need to add a new row
      len = [...len, {label: ''}]
    }
  }
</script>
{#each len as opt, index}
  <div><CustomLabel
    list='optional'
    on:input={add}
    label={opt.label ? opt.label : ''}
    value={opt.value ? opt.value : ''}
    {index}
  /></div>
{/each}
<datalist id='optional' style='display: none;'>
  {#each optional as opt}
    <option>{opt.label}</option>
  {/each}
</datalist>