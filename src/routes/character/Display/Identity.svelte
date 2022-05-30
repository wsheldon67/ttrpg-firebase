<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import Header from "$lib/c/Header.svelte";
  import History from "./History.svelte";
  import Training from "./Training.svelte";
  import Personality from "./Personality.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

// TODO backgrounds to lib/data
</script>
<Header h={1} {start} title={character.name + ' - The ' + character.playbook} {hide}>
  <p><em>{character.concept} {character.look}</em></p>
  <History start={start+1} {character} hide/>
  <Training start={start+1} {character} hide/>
  <Personality start={start+1} {character} hide/>
</Header>