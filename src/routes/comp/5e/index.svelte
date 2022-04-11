<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Abilities from './Abilities/index.svelte'
  import Conditions from './Conditions/toc.svelte'
  import Movement from './Movement/index.svelte'

  export let start: number = 2
  export let show: boolean = true
</script>
<Header h={1} start={1} {show} title='Dungeons and Dragons, 5th Edition'>
  <Abilities {start} />
  <Conditions {start} />
  <Movement {start} />
</Header>