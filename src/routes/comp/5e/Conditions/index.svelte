<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  import Blinded from './Blinded.svelte'
  import Charmed from './Charmed.svelte'
  import Deafened from './Deafened.svelte'
  import Exhaustion from './Exhaustion.svelte'
  import Frightened from './Frightened.svelte'
  import Grappled from './Grappled.svelte'
  import Invisible from './Invisible.svelte'
  import Paralyzed from './Paralyzed.svelte'
  import Petrified from './Petrified.svelte'
  import Poisoned from './Poisoned.svelte'
  import Prone from './Prone.svelte'
  import Restrained from './Restrained.svelte'
  import Stunned from './Stunned.svelte'
  import Unconcious from './Unconcious.svelte'

  export let start: number = 1
  let low = start + 1
</script>
<Header h={1} {start} title='Conditions'>
  <p>The following is a list of the conditions that can be applied to creature:</p>
  <Blinded start={low} show={false} />
  <Charmed start={low} show={false} />
  <Deafened start={low} show={false} />
  <Exhaustion start={low} show={false} />
  <Frightened start={low} show={false} />
  <Grappled start={low} show={false} />
  <Invisible start={low} show={false} />
  <Paralyzed start={low} show={false} />
  <Petrified start={low} show={false} />
  <Poisoned start={low} show={false} />
  <Prone start={low} show={false} />
  <Restrained start={low} show={false} />
  <Stunned start={low} show={false} />
  <Unconcious start={low} show={false} />
</Header>