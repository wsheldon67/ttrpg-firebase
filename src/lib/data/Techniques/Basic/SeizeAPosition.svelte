<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Seize a Position'>
  <slot slot='header' />
  <p>Choose one:</p>
  <ul>
    <li>Move to a new location</li>
    <li>Engage/disengage with a foe</li>
    <li>Overcome a negative <Tip text='status'/> or danger</li>
    <li>Establish an advantageous position</li>
    <li>Escape the scene</li>
  </ul>
  <p>Any foe engaged with you can mark 1 <Tip text='fatigue'/> to block this technique.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Charge into battle with a new enemy</li>
      <li>Flee from your current opponent</li>
      <li>Move to somehwere in particular</li>
      <li>Move to remove a <Tip text='status'/> that is based on your location</li>
    </ul>
  </Header>
</Header>