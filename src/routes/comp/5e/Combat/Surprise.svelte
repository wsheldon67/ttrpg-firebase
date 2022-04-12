<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  // TODO link passive
</script>
<Header h={1} {start} {show} title='Surprise'>
  <p>Anyone attempting to enter combat unnoticed makes a <a href='/comp/5e/Abilities/Dexterity'>stealth</a> check.</p>
  <p>If any creature's <Tip text='passive'/> <a href='/comp/5e/Abilities/Wisdom'>perception</a> is less than or equal to the stealth check, that creature is surprised.</p>
  <ul>
    <li>Suprised creatures do not take actions reactions, or move during the first round.</li>
  </ul>
</Header>