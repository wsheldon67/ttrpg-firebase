<script lang='ts'>
  import Header from "$lib/c/Header.svelte"
  import type { Data } from '$lib/data/character'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  $: traininger = training_to_traininger(character.trainings)

  function training_to_traininger(training:string[]):string {
    const map = {
      Waterbending: 'Waterbender',
      Earthbending: 'Earthbender',
      Firebending: 'Firebender',
      Airbending: 'Airebender',
      Weapons: 'Weapon warrior',
      Technology: 'Technological warrior'
    }
    if (training.length === 1) {
      return map[training[0]]
    } else if (training.length === 2) {
      return map[training[0]] + ' / ' + map[training[1]]
    }
  }
</script>
<Header h={1} {start} title='Training' {hide}>
  <p>I am a {traininger} whose fighting style is {character.fighting_style}.</p>
</Header>