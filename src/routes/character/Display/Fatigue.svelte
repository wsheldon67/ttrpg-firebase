<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
import Scale from "$lib/c/Scale.svelte";
  import type { Data } from '$lib/data/character'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title={'Fatigue: ' + character.fatigue + '/5'}>
  <Scale bind:value={character.fatigue} min='0' max='5' optimum='0' low='2' high=3 reverse/>
</Header>