<script lang='ts'>
  import { onMount } from 'svelte'
  let value
  
  onMount(() => {

    const statuses = ['Firebending', 'Airbending', 'Weapons', 'Technology']
    let res = ``
    statuses.forEach((v) => {
      res += `{name: '${v}', component: ${v}},
      `
    })
    value = res
  })
</script>
<textarea {value}></textarea>
<style>
  textarea {
    width: 98%;
    height: 90vh;
  }
</style>