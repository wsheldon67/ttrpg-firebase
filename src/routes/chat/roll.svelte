<script lang='ts'>
import { roll_result } from "$lib/data/roll_results";

  import { signed } from "$lib/pretty";

  export let note
  $: result = roll_result(note.label, note.total)
</script>
<p>{note.label}:</p>
<p class:good={note.total >= 10} class:bad={note.total < 7}>
  <span class='p'>{note.d1}</span> + <span class='p'>{note.d2}</span> {signed(note.mod)} = {note.total}
</p>
{#if result}
<details>
  <summary>Result</summary>
  {@html result}
</details>
{/if}
<style>
  .good {
    color: var(--good);
  }
  .bad {
    color: var(--bad);
  }
  details :global(*) {
    font-size: small;
  }
  summary {
    font-size: medium;
  }
</style>