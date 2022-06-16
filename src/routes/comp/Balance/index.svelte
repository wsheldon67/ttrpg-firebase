<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import LoseYourBalance from '../Moves/LoseYourBalance.svelte'
  import Center from './Center.svelte'
  import Shift from './Shift.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Balance' is_page_title>
  <p>Each playbook has two <strong>principles</strong>, core beliefs or ideals a character wrestles with throughout their adventures. Players track their <strong>balance</strong> between these principles on a scale from -3 to +3.</p>
  <Shift start={start+1} />
  <Center start={start+1} />
  <LoseYourBalance start={start+1} />
</Header>