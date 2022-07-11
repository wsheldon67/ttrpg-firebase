<script lang='ts'>
  import type { Campaign } from "$lib/data/campaign";

  export let campaign:Campaign
  let selected = [0,0,0]

  function input(act_index:number, prompt_index:number) {
    selected[act_index] = prompt_index
    if (!campaign.incident) {campaign.incident = []}
    campaign.incident[act_index] = acts[act_index][prompt_index].join('')
  }
  const acts = [
    [
      [`We befriended `,`ally`,` who gave us access to `,`valuable item`,`.`],
      [`We discovered a secret hidden by `,`powerful figure`,`.`],
      [`We did something fun, but drew the ire of `,`powerful figure`,`in the process.`],
      [`We learned the frightening plans of `, `powerful foe`, `.`]
    ],[
      [`We stole `,`valuable item`,` from `,`powerful foe`,`.`],
      [`We discovered a terrible truth about `,`location or powerful figure`,`.`],
      [`We defended `,`ally or place`, ` from `, `powerful foe`,`.`],
      [`We destroyed `,`valuable item`,` and drew the ire of its owner, `,`powerful foe`,`.`]
    ],[
      [`We fought and barely defeated `,`powerful foe`,`.`],
      [`We narrowly escaped capture by `,`powerful foe`,`.`],
      [`We saved or rescued `,`ally`,` from `, `powerful figure`,'.'],
      [`We were saved from `,`powerful foe`, ` by `,`ally`,`, to their own detriment.`]
    ]
  ]
</script>
<p>Choose 1 from each act.</p>
{#each acts as act, index}
  <h2>Act {'I'.repeat(index+1)}</h2>
  <ul>
    {#each act as prompt, pindex}
      <li class:selected={selected[index] === pindex}>
        {#each prompt as segment, sindex}
          {#if sindex % 2 === 0}
            {segment}
          {:else}
            <input
              bind:value={segment}
              on:input={(e)=>{input(index, pindex)}}
            />
          {/if}
        {/each}
      </li>
    {/each}
  </ul>
{/each}
<style>
  .selected {
    padding: .5em;
  }
</style>