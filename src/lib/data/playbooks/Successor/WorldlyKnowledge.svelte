<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import { compatible_trainings } from '$lib/data/trainings'
  import { background_names } from '$lib/data/backgrounds'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false

  function applicable_backgrounds(char:Data):string[] {
    return background_names.filter((background) => {
      return ![char.backgrounds[0], char.backgrounds[1]].includes(background)
    })
  }
  function applicable_trainings(char:Data):string[] {
    return compatible_trainings([character.trainings[0]])
      .filter(training => training !== character.trainings[0] && training !== 'Universal')
  }

  // TODO select 2nd training, 3rd background
</script>
<Header h={1} {start} {hide} title='Worldly Knowledge'>
  <slot slot='header'/>
  <p>Your upbringing expanded your horizons, skillsets, and contracts. Choose another <Tip text='training'/> and another <Tip text='background'/>.</p>
  {#if character}
    <label>
      Training:
      <select bind:value={character.trainings[1]}>
        {#each applicable_trainings(character) as training}
          <option>{training}</option>
        {/each}
      </select>
    </label>
    <label>
      Background:
      <select bind:value={character.backgrounds[2]}>
        {#each applicable_backgrounds(character) as background}
          <option>{background}</option>
        {/each}
      </select>
    </label>
  {/if}
</Header>