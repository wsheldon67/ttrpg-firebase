<script lang='ts'>
  // opts [{label, value}]
  // click a result to add, click added result to remove
  // event when something is added, removed, or changed fires on both.
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let opts = []
  let selected = []

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
</script>
<div>
  {#each selected as select (select.id)}
    <button
      on:click|preventDefault={click}
      value={select.id}
    >{select.label}</button>
  {/each}
</div>
<select on:input={input}>
  <option></option>
  {#each opts as opt (opt.id)}
    <option value={opt.id}>{opt.label}</option>
  {/each}
</select>