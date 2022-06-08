<script lang='ts'>
  import Military from '../../comp/Setup/Military.svelte'
  import Monastic from '../../comp/Setup/Monastic.svelte'
  import Outlaw from '../../comp/Setup/Outlaw.svelte'
  import Privileged from '../../comp/Setup/Privileged.svelte'
  import Urban from '../../comp/Setup/Urban.svelte'
  import Wilderness from '../../comp/Setup/Wilderness.svelte'
  import Select from './_Select.svelte'

  export let character

  let options = [
    {name: 'Military', component: Military}, {name: 'Monastic', component: Monastic},
    {name: 'Outlaw', component: Outlaw}, {name: 'Priveledged', component: Privileged},
    {name: 'Urban', component: Urban}, {name: 'Wilderness', component: Wilderness}
  ]

  function click(background:string) {
    if (character.backgrounds.includes(background)) {
      character.backgrounds = character.backgrounds.filter(el => el !== background)
    } else if (character.backgrounds.length === 2) {
      character.backgrounds[1] = background
    } else {
      character.backgrounds = [...character.backgrounds, background]
    }
  }
</script>
<style>
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
<p>Choose 1 or 2 backgrounds:</p>
<div class='cont'>
  {#each options as {name, component} (name)}
    <div class={'card' + (character.backgrounds.includes(name) ? ' selected' : '')}>
      <svelte:component this={component} start={2}>
        <Select selected={character.backgrounds.includes(name)} on:click={()=>{click(name)}} />
      </svelte:component>
    </div>
  {/each}
</div>
