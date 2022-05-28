<script lang='ts'>
  import Earthbending from "../../comp/Setup/Earthbending.svelte";
  import Waterbending from "../../comp/Setup/Waterbending.svelte";

  export let character

  const trainings = [
    {name: 'Waterbending', component: Waterbending},
    {name: 'Earthbending', component: Earthbending}
  ]

  function click(clicked_training:string) {
    character.training = clicked_training
  }
</script>
<label>
  Fighting Style:
  <input
    type='text'
    bind:value={character.fighting_style}
  />
</label>
<div class='cardtainer'>
{#each trainings as {component, name}}
  <button
    class={'card' + (character.training === name ? ' selected' : '')}
    on:click={()=>{click(name)}}
  >
    <svelte:component this={component} start={2}/>
  </button>
{/each}
</div>