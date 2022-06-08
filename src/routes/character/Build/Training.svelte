<script lang='ts'>
  import Earthbending from "../../comp/Setup/Earthbending.svelte"
  import Waterbending from "../../comp/Setup/Waterbending.svelte"
  import Firebending from '../../comp/Setup/Firebending.svelte'
  import Airbending from '../../comp/Setup/Airbending.svelte'
  import Weapons from '../../comp/Setup/Weapons.svelte'
  import Technology from '../../comp/Setup/Technology.svelte'
  import Select from "./_Select.svelte"
  import Tooltip from "$lib/c/Tooltip.svelte";
  import type { Data } from "$lib/data/character";

  export let character:Data

  const trainings = [
    {name: 'Waterbending', component: Waterbending},
    {name: 'Earthbending', component: Earthbending},
    {name: 'Firebending', component: Firebending},
    {name: 'Airbending', component: Airbending},
    {name: 'Weapons', component: Weapons},
    {name: 'Technology', component: Technology},
  ]

  function click(clicked_training:string) {
    character.trainings[0] = clicked_training
  }
</script>
<p>Choose your Training, and then specify a Fighting Style.</p>
<label>
  <Tooltip tip='Changes the way your character fights, making them different from other fighters who use the same training. See the examples for each training below.'>Fighting Style:</Tooltip>
  <input
    type='text'
    bind:value={character.fighting_style}
  />
</label>
<div class='cardtainer'>
{#each trainings as {component, name}}
  <div class={'card' + (character.trainings[0] === name ? ' selected' : '')}>
    <svelte:component this={component} start={2}>
      <Select selected={character.trainings[0] === name} on:click={()=>{click(name)}} />
    </svelte:component>
  </div>
{/each}
</div>