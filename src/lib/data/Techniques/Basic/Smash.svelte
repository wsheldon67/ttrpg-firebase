<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Smash'>
  <p>Mark 1 <Tip text='fatigue'/> to destroy or destabilize something in the environment.</p>
  <ul><li>Can be used to remove or inflict <Tip text='statuses'/></li></ul>
  <Header h={2} {start} title='Examples' hide>
    <p>Break, wreck, destroy or destabilize the environment</p>
    <ul>
      <li>Use a sharp slice of water to cut the rope holding a light overhead</li>
      <li>Use earthbending to rip away a whole wall</li>
      <li>Use a careful blast of wind to rip the leaves off a tree</li>
    </ul>
  </Header>
</Header>