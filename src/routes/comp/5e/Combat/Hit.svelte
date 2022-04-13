<script lang='ts'>
  import Tip from '../_Tip.svelte'
</script>
<p>If the attack roll meets or beats the target's AC, the attack hits.</p>
<ul>
  <li>If the d20 is a 1, the attack fails</li>
  <li>If the d20 is a 20, the attack hits, and is a <Tip text='critical hit' path='Combat/CriticalHit'/></li>
</ul>