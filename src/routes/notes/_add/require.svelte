<script>
  export let require
</script>
{#each require as reqItem}
  <label>
    {reqItem.label}
    <input type={reqItem.type} name={reqItem.label}/>
  </label>
{/each}