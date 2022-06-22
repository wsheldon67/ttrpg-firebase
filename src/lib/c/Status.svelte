<script lang='ts'>
  import type { Data, Status } from "$lib/data/character";
  import type { NPC } from "$lib/data/npc";

  export let character:Data|NPC
  export let remove:boolean = false
  export let status:Status
  $: positive = ['Empowered','Favored','Inspired','Prepared'].includes(status)
  $: status_group = positive ? 'positive_statuses' : 'negative_statuses'
  $: is_applied = character[status_group].some(el => el.name === status && el.applied)
  $: disabled = remove ? !is_applied : is_applied

  function click() {
    const new_statuss = [...character[status_group]]
    new_statuss.find(el => el.name === status).applied = !remove
    character[status_group] = [...new_statuss]
  }
</script>
<button class='p' on:click={click} {disabled}>
  {remove ? '-':'+'}{status}
</button>