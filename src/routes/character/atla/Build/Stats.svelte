<script lang='ts'>
  import ThisWasAVictory from '../../../comp/atla/Playbooks/Adamant/ThisWasAVictory.svelte'
  import TakesOneToKnowOne from '../../../comp/atla/Playbooks/Adamant/TakesOneToKnowOne.svelte'
import Next from './_Next.svelte'
  const stats = ['Creativity', 'Focus', 'Harmony', 'Passion']
  let choice = 'Passion'
</script>
<style>
  .selected {
    border: 1px solid red;
  }
</style>
<p>Take +1 to a stat:</p>
<div>
  {#each stats as stat}
    <label>
      <input type='radio' name='stat' value={stat} bind:group={choice} />
      {stat}
    </label>
  {/each}
</div>
<p>Choose 2 moves:</p>
<div class='cardtainer'>
  <div class='card selected'>
    <ThisWasAVictory start={2} hide/>
  </div>
  <div class='card'>
    <TakesOneToKnowOne start={2} hide/>
  </div>
</div>
<Next from='Touches' to='Techniques'/>