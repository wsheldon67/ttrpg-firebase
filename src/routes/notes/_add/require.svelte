<script lang='ts'>
  export let require: {label: string, type?: string}[] = []
  export let note = undefined

</script>
{#each require as reqItem}
  <label>
    {reqItem.label}
    <input
      type={reqItem.type}
      name={reqItem.label}
      value={note[reqItem.label]}
    />
  </label>
{/each}