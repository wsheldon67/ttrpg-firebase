<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import type { Data } from '$lib/data/character'
import Conditions from "./Conditions.svelte";
import Fatigue from "./Fatigue.svelte";
import Statuses from "./Statuses.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title='Condition'>
  <Fatigue start={start+1} bind:character={character} />
  <Conditions start={start+1} bind:character={character} />
  <Statuses start={start+1} bind:character={character}/>
</Header>