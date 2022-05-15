<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'
import TakesOneToKnowOne from './TakesOneToKnowOne.svelte'
import ThisWasAVictory from './ThisWasAVictory.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Adamant'>
  <p><em>The Adamant will fix the world, even if it means breaking all the rules. Play the Adamant if you want to contend with what "doing right" means in a complicated world.</em></p>
  <Header h={2} {start} title='Principles'>
    <p><Tooltip tip="The desire to hold back and be careful, to think and comprehend and plan instead of bulling ahead.">Restraint</Tooltip> vs <Tooltip tip="The drive to change things for the better and have it stick. Cares more about getting results than what it might cost.">Results</Tooltip></p>
  </Header>
  <Header h={2} {start} title='Starting Stats'>
    <table>
      <tr>
        <td><Tip text='Creativity'/> +0</td>
        <td><Tip text='Focus'/> +1</td>
      </tr>
      <tr>
        <td><Tip text='Harmony'/> -1</td>
        <td><Tip text='Passion'/> +1</td>
      </tr>
    </table>
  </Header>
  <Header h={2} {start} title='Demeanor Options' hide>
    <ul class='list'>
      <li>Above-it-all</li>
      <li>Perfectionist</li>
      <li>Chilly</li>
      <li>Rebellious</li>
      <li>Flippant</li>
      <li>Standoffish</li>
    </ul>
  </Header>
  <Header h={2} {start} title='The Lodestar' hide>
    <p>The one person you listen to who can rein you in; often the only person you let past your emotional walls.</p>
    <ul>
      <li>Cannot resist your lodestar when they <Tip text='shift your balance'/> or <Tip text='call you out'/></li>
      <li>//TODO finish lodestar</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves' hide>
    <ThisWasAVictory start={start+2} hide/>
    <TakesOneToKnowOne start={start+2} hide/>
  </Header>
</Header>