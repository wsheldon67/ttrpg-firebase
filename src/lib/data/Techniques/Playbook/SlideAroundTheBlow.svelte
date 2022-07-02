<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte';
import type { Data } from '$lib/data/character';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
</script>
<Header h={1} {start} {hide} title='Slide Around the Blow'>
  <slot slot='header' />
  <p><em>You move perfectly, slipping past strikes and demanding an opponent's attention.</em></p>
  <p>A foe you are <Tip text='engaged'/> with must remain engaged with you and can only use techniques against you in the next <Tip text='exchange'/>.</p>
  <p>If no foe is engaged with you, you may slip through the fight to engage a new foe.</p>
  <ul><li>No foe may mark <Tip text='fatigue'/> to stop you.</li></ul>
</Header>