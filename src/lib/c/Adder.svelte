<script lang='ts'>
  // opts [{label, value}]
  // click a result to add, click added result to remove
  // event when something is added, removed, or changed fires on both.
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import type { Element } from '../types.type'

  export let opts: Element[]
  export let selected: Element[] = []

  function input(e) {
    if (e.target.value == '') {return}
    const added = opts.find(el => el.id === e.target.value)
    dispatch('add', added)
    selected = [...selected, added]
    opts = opts.filter(el => el.id !== e.target.value)
    dispatch('change', selected)
  }
  function click(e) {
    const removed = selected.find(el => el.id === e.target.value)
    dispatch('remove', removed)
    opts = [...opts, removed]
    selected = selected.filter(el => el.id !== e.target.value)
    dispatch('change', selected)
  }
  // TODO draw 'x' on button on hover (for remove from selected)
</script>
<select on:input={input}>
  <option></option>
  {#each opts as opt (opt.id)}
    <option value={opt.id}>{opt.label}</option>
  {/each}
</select>
<div>
  {#each selected as select (select.id)}
    <button
      on:click|preventDefault={click}
      value={select.id}
    >{select.label}</button>
  {/each}
</div>
