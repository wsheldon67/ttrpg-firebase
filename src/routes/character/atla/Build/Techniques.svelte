<script lang='ts'>
import Next from "./_Next.svelte";

</script>
<p>Choose one mastered and one learned technique:</p>
<div class='cardtainer'>
  <div class='card'>
    <div>
      <label>
        <input type='checkbox'/>
        Learned
      </label>
      <label>
        <input type='checkbox'/>
        Mastered
      </label>
    </div>
    <h2>Attack Weakness</h2>
    <p>Strike an enemy at a weak point where they've already been injured. Mark 1 fatigue to target an engaged, Impaired enemy in reach; they suffer fatigue equal to however many conditions they already have marked.</p>
  </div>
  <div class='card'>
    <div>
      <label>
        <input type='checkbox'/>
        Learned
      </label>
      <label>
        <input type='checkbox'/>
        Mastered
      </label>
    </div>
    <h2>Charge</h2>
    <p>Advance straight at an enemy to strike them full force. Mark 1 fatigue to close the distance and engage with an enemy you aren't currently engaged with, inflicting one condition or 2 fatigue (their choice). Become Favored for the next exchange.</p>
  </div>
</div>
<Next from='Stats' to='Connections'/>