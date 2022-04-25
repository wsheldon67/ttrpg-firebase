<script lang='ts'>
import Collapse from '$lib/c/Collapse.svelte';
import ObjectViewer from '$lib/c/ObjectViewer.svelte';

  import { process_character } from '../character';
  import type { Data } from '../User'
  import Ability from './ability.svelte';
import Info from './Info.svelte';
import Save from './Save.svelte';

  export let data:Data

  $: c = process_character(data)
</script>
<style>
  .col {
    display: flex;
    flex-direction: column;
  }
</style>
<Collapse label='Abilities' collapsed={false}>
  <div class='col'>
    <Ability {c}/>
  </div>
</Collapse>
<Collapse label='Saves' collapsed={false}>
  <div class='col'>
    <Save {c}/>
  </div>
</Collapse>
<Collapse label='Info' collapsed={false}>
  <Info {c}/>
</Collapse>