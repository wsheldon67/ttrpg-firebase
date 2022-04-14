<script lang='ts'>
  import  {character}  from './character'

  import ObjectViewer from '$lib/c/ObjectViewer.svelte'

  const races = ['Dwarf', 'HillDwarf']
  let d = {
    race: 'Dwarf', class: 'Barbarian'
  }
  $: c = character(d)
</script>
<select bind:value={d.race}>
  {#each races as race}
    <option>{race}</option>
  {/each}
</select>
<ObjectViewer object={c} />