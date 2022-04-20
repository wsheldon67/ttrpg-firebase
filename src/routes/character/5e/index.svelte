<script lang='ts'>
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'
  import type {Data} from './User'
  import { process_character } from './character'
  import { run_reset } from './api';

  const races = ['Mountain_Dwarf', 'Hill_Dwarf']
  
  let d:Data = {
    race: 'Dwarf',
    subrace: 'Hill_Dwarf',
    name: 'Untitled',
    class: [{name: 'Barbarian', level: 1}],
    xp: 0,
    items: [],
    equipped: {},
    spell: [],
    slot: [],
    hd_rolls: [],
    alignment: 'NG',
    ab_rolls: {
      str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10
    },
    background: ``,
    info: {},
    wealth: 50,
    hp: 30,
    tracker: [],
    Dwarf: {
      tool_proficiency: `Smith's Tools`
    },
    script: {}
  }

  $: c = process_character(d)

  function long_rest() {
    d = run_reset(c, d, 'Long Rest')
  }

</script>
<select bind:value={d.subrace}>
  {#each races as race}
    <option>{race}</option>
  {/each}
</select>
<ObjectViewer object={c} debug/>
{#each c.active as feat}
  <svelte:component this={feat} bind:data={d}/>
{/each}
<button on:click={long_rest}>Long Rest</button>