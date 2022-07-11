<script lang='ts'>
  import type { Campaign } from "$lib/data/campaign";

  import KyoshiEra from "../../comp/Setup/KyoshiEra.svelte";
  import RokuEra from "../../comp/Setup/RokuEra.svelte";

  export let campaign:Campaign

  const eras = [
    {name: 'Kyoshi', comp: KyoshiEra}, {name: 'Roku', comp: RokuEra},
  ]

  function click(name:string) {
    campaign.era = name
  }
  // TODO other eras
</script>
Choose an era:
<div class='cardtainer'>
  {#each eras as {name, comp}}
    <button
      class='card'
      on:click={()=>{click(name)}}
      class:selected={name === campaign.era}
    >
      <svelte:component this={comp} start={2}/>
    </button>
  {/each}
</div>