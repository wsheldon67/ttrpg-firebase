<script lang='ts'>
import Collapse from '$lib/c/Collapse.svelte';
import ObjectViewer from '$lib/c/ObjectViewer.svelte';

  import { process_character } from '../character';
  import type { Data } from '../User'
  import Ability from './ability.svelte';
import Active from './Active.svelte';
import Feats from './Feats.svelte';
import Info from './Info.svelte';
import Save from './Save.svelte';
import Skill from './Skill.svelte';

  export let data:Data

  $: c = process_character(data)
</script>
<style>
  .col {
    display: flex;
    flex-direction: column;
  }
</style>
<Collapse label='Abilities'>
  <div class='col'>
    <Ability {c}/>
  </div>
</Collapse>
<Collapse label='Saves'>
  <div class='col'>
    <Save {c}/>
  </div>
</Collapse>
<Collapse label='Skills'>
  <div class='col'>
    <Skill {c}/>
  </div>
</Collapse>
<Collapse label='Info'>
  <Info {c}/>
</Collapse>
<Collapse label='Feats'>
  <Feats {c}/>
</Collapse>
<Collapse label='Actions'>
  <Active {c}/>
</Collapse>