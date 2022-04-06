<script lang='ts'>
  import Set from './Set.svelte'
  import type { Unit } from '$lib/time/time.type'
  import AddUnit from './_AddUnit.svelte'
  import NextDay from './_NextDay.svelte'

  type Opt = {
    label?: string,
    amt?: number,
    unit?: Unit
  }

  export let opts:Opt[] = [
    {label: '1 Round', amt: 6},
    {label: '1 Minute', unit: 'minute'},
    {label: '10 Minutes', unit: 'minute', amt: 10},
    {label: '1 Hour', unit: 'hour'},  
  ]
</script>
<Set />
{#each opts as opt}
  <AddUnit {...opt} />  
{/each}
<NextDay />