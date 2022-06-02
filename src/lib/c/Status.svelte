<script lang='ts'>
    import type { Data, Status } from "$lib/data/character";
  
    export let character:Data
    export let remove:boolean = false
    export let status:Status
    $: positive = ['Empowered','Favored','Inspired','Prepared'].includes(status)
    $: status_group = character[positive ? 'positive_statuses' : 'negative_statuses']
    $: disabled = status_group.some(el => el.name === status && el.applied)
  
    function click() {
      const new_statuss = [...status_group]
      new_statuss.find(el => el.name === status).applied = !remove
      status_group = [...new_statuss]
    }
  </script>
  <button class='p' on:click={click} {disabled}>
    {remove ? '-':'+'}{status}
  </button>