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
{#each c.save as {name, mod, adv, comp, adv_comp}}
    <!--svelte-ignore a11y-label-has-associated-control-->
    <label class='label'>
      <Tooltip tip={comp_to_words([...comp, ...adv_comp])}>
        {name}
      </Tooltip>
      <Roll label={name} m={mod} a={adv}/>
    </label>
{/each}