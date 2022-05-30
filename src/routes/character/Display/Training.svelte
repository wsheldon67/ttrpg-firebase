<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from '$lib/data/character'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  $: traininger = training_to_traininger(character.training)

  function training_to_traininger(training:string):string {
    const map = {
      Waterbending: 'Waterbender',
      Earthbending: 'Earthbender',
      Firebending: 'Firebender',
      Airbending: 'Airebender',
      Weapons: 'Weapon warrior',
      Technology: 'Technological warrior'
    }
    return map[training]
  }
</script>
<Header h={1} {start} title='Training' {hide}>
  <p>I am a {traininger} whose fighting style is {character.fighting_style}.</p>
</Header>