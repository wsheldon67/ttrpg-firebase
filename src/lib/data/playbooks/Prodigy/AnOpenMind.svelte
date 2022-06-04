<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import Tip from '$lib/c/Tip.svelte'
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined

  // TODO techniques from other skills and training
  // This move might be complicated, also looking into how we're implementing the Training Move
</script>
<Header h={1} {start} {hide} title="An Open Mind">
  <p>You can learn up to 3 techniques from other skills and trainings, as long as you have a teacher.</p>
  <ul>
    <li>Take +1 on the <Tip text='training move'/> to learn such techniques.</li>
  </ul>
</Header>