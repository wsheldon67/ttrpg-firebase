<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import Next from "./_Next.svelte";

</script>
<label>
  Hometown:
  <input type='text' />
</label>
<label>
  <Tooltip tip="Recommended: Above-it-all, Perfectionist, Chilly, Rebelious, Flippant, Standoffish">Demeanors:</Tooltip>
  <input type='text' />
</label>
<div>
  <button>X</button> Standoffish
</div>
<label>
  Look:
  <textarea></textarea>
</label>
<label>
  What experience of being decieved or manipulated convinced you to steel yourself against being swayed by other people?
  <textarea></textarea>
</label>
<label>
  Who was your first lodestar, and why were they an exception? Why aren't they your lodestar anymore?
  <textarea></textarea>
</label>
<label>
  Who earned your grudging respect by teaching you pragmatism?
  <textarea></textarea>
</label>
<label>
  What heirloom or piece of craftsmanship do you carry to remind you to stay true to yourself?
  <textarea></textarea>
</label>
<label>
  Why are you committed to this group or purpose?
  <textarea></textarea>
</label>
<Next from='Backgrounds' to='Stats'/>