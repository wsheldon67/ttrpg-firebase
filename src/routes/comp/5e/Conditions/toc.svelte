<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Conditions'>
  <a href='/comp/5e/Conditions/Blinded'>Blinded</a>
  <a href='/comp/5e/Conditions/Charmed'>Charmed</a>
  <a href='/comp/5e/Conditions/Deafened'>Deafened</a>
  <a href='/comp/5e/Conditions/Exhaustion'>Exhaustion</a>
  <a href='/comp/5e/Conditions/Frightened'>Frightened</a>
  <a href='/comp/5e/Conditions/Grappled'>Grappled</a>
  <a href='/comp/5e/Conditions/Invisible'>Invisible</a>
  <a href='/comp/5e/Conditions/Paralyzed'>Paralyzed</a>
  <a href='/comp/5e/Conditions/Petrified'>Petrified</a>
  <a href='/comp/5e/Conditions/Poisoned'>Poisoned</a>
  <a href='/comp/5e/Conditions/Prone'>Prone</a>
  <a href='/comp/5e/Conditions/Restrained'>Restrained</a>
  <a href='/comp/5e/Conditions/Stunned'>Stunned</a>
  <a href='/comp/5e/Conditions/Unconcious'>Unconcious</a>
</Header>