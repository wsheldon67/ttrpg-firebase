<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
import Scale from "$lib/c/Scale.svelte";
  import type { Data } from '$lib/data/character'
import { playbook } from "$lib/data/playbooks";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Growth'>
  <Scale bind:value={character.growth} min=0 max=4 optimum=4 low=0 high=4/>
  <p>Answer this question in addition to the standard growth questions:</p>
  <p><em>{playbook[character.playbook].growth_question}</em></p>
</Header>