<script lang='ts'>
  import type { Campaign } from "$lib/data/campaign";
  import AangEra from "../../comp/Setup/AangEra.svelte";
  import HundredYearWarEra from "../../comp/Setup/HundredYearWarEra.svelte";
  import KorraEra from "../../comp/Setup/KorraEra.svelte";
  import KyoshiEra from "../../comp/Setup/KyoshiEra.svelte";
  import RokuEra from "../../comp/Setup/RokuEra.svelte";

  export let campaign:Campaign

  const eras = [
    {name: 'Kyoshi', comp: KyoshiEra}, {name: 'Roku', comp: RokuEra},
    {name: 'Hundred Year War', comp: HundredYearWarEra}, {name: 'Aang', comp: AangEra},
    {name: 'Korra', comp: KorraEra}
  ]

  function click(name:string) {
    campaign.era = name
  }
</script>
<svelte:head><title>Choose an Era</title></svelte:head>
<h1>Era</h1>
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