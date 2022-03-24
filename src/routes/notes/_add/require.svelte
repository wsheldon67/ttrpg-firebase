<script lang='ts'>
  export let require: {label: string, type?: string}[] = []
  export let note = undefined
</script>
{#each require as reqItem}
  <!--svelte-ignore a11y-label-has-associated-control-->
  <label>
    {reqItem.label}
    {#if reqItem.type === 'textarea'}
      <textarea
        type={reqItem.type}
        name={reqItem.label}
        value={note?note[reqItem.label]:''}
      ></textarea>
    {:else}
    <input
      type={reqItem.type}
      name={reqItem.label}
      value={note?note[reqItem.label]:''}
    />
    {/if}
  </label>
{/each}