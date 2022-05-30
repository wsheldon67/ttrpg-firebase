<script lang='ts'>
  import { onMount } from 'svelte'
  let value
  
  onMount(() => {
    const statuses = ['Overwhelm', 'Wall of Perfection', 'Disorient', 'Slide Around The Blow',
  'Steady Stance','Sweep The Leg', 'Break', 'Anticipate', 'Patience', 'Feel The Flow', 'Lure']
    let res = ``
    statuses.forEach((status) => {
      res += `,
  {
    name: '${status}',
    url: 'Playbook/${status.replace(/\s/g,'')}',
    tags: ['Playbook']
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