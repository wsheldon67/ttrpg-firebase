<script lang='ts'>
  import type { Character } from "../UI"
  import Tooltip from "$lib/c/Tooltip.svelte"
  import Roll from '$lib/c/Roll.svelte'
  import { comp_to_words } from "$lib/pretty"

  export let c:Character
</script>
<style>
  .label {
    display: grid;
    grid-template-columns: 3em auto;
  }
</style>
{#each c.ab as {name, mod, adv, comp, score_comp, adv_comp}}
  <Tooltip tip={comp_to_words([...score_comp, ...comp, ...adv_comp])}>
    <!--svelte-ignore a11y-label-has-associated-control-->
    <label class='label'>
      {name}
      <Roll label={name} m={mod} a={adv}/>
    </label>
  </Tooltip>
{/each}