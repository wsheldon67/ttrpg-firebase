<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import MeleeAttack from './MeleeAttack.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Opportunity Attack'>
  <p>When...</p>
  <ul>
    <li>A creature moves out of an opponent's reach, and</li>
    <li>that opponent can see the creature</li>
  </ul>
  <p>The opponent may make a melee attack using their reaction.</p>
</Header>
<MeleeAttack {start} />