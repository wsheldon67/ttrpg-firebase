<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Approach from './Approach.svelte'
  import Preparation from './Preparation.svelte';
  import Steps from './Steps.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Header h={1} {start} {hide} title='Combat Exchanges' is_page_title>
  <p>An exchange represents a nearly simultaneous set of actions between two or more combatants.</p>
  <Preparation start={low} hide/>
  <Approach start={low} hide/>
  <Steps start={low} />
</Header>