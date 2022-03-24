<script lang='ts'>
  export let require: {label: string, type?: string}[] = []
  export let note = undefined
  // TODO support textarea as type
</script>
{#each require as reqItem}
  <label>
    {reqItem.label}
    <input
      type={reqItem.type}
      name={reqItem.label}
      value={note?note[reqItem.label]:''}
    />
  </label>
{/each}