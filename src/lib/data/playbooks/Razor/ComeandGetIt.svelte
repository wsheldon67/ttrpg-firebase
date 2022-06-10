<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Come and Get It">
  <slot slot='header'/>
  <p><Tip text='Trick'/> someone by provoking them through their <Tip text='conditions'/>.</p>
  <ul>
    <li>Roll with their conditions marked isntead of Creativity.</li>
  </ul>
</Header>