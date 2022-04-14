<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { onMount } from 'svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true

  onMount(async ()=> {
    // TODO get data for spell slots
  })
</script>
<Header h={1} {start} {show} title='Spell Slots'>
  
</Header>