<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true

</script>
<Header h={1} {start} {show} title='Combat'>
  <a href='/comp/5e/Combat/StartingCombat'>Starting Combat</a>
  <a href='/comp/5e/Combat/Turn'>Your Turn</a>
  <a href='/comp/5e/Combat/Reach'>Reach</a>
  <a href='/comp/5e/Combat/OpportunityAttack'>Opportunity Attacks</a>
  <a href='/comp/5e/Combat/DamageModifiers'>Resistance and Vulnerability</a>
  <a href='/comp/5e/Combat/CriticalHit'>Critical Hits</a>
  <a href='/comp/5e/Combat/ZeroHP'>Zero HP and Dying</a>
  <a href='/comp/5e/Combat/TemporaryHP'>Temporary HP</a>
  <a href='/comp/5e/Combat/Mount'>Mounts</a>
</Header>