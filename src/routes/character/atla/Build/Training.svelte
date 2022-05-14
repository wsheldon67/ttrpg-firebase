<script lang='ts'>
import Earthbending from "../../../comp/atla/Setup/Earthbending.svelte";
import Waterbending from "../../../comp/atla/Setup/Waterbending.svelte";
import Nav from "./_Nav.svelte";
import Next from "./_Next.svelte";


</script>
<style>
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .5em;
  }
  .card {
    background-color: var(--b1);
    max-width: 36em;
    width: 46%;
    text-align: initial;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: .5em;
  }
  .card :global(h2) {
    width: 100%;
  }
  .selected {
    border: 1px solid var(--bad)
  }
</style>
<Nav />
<label>
  Fighting Style:
  <input type='text'/>
</label>
<div class='cont'>
  <button class='card'><Waterbending start={2} /></button>
  <button class='card selected'><Earthbending start={2} /></button>
</div>
<Next from='Details' to='Backgrounds'/>