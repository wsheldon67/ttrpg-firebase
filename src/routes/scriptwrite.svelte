<script lang='ts'>
  import { onMount } from 'svelte'
  let value
  
  onMount(() => {
    const statuses = ['Afraid', 'Angry', 'Guilty', 'Insecure', 'Troubled']
    let res = ``
    statuses.forEach((status) => {
      res += `export const ${status}:Condition = {
        name: '${status}',
        text: \`\`
      }
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