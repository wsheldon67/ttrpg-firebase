<script lang='ts'>
  import type { Campaign } from "$lib/data/campaign";

  export let campaign:Campaign

  const options = [
    ['To defeat', 'dangerous foe'],
    ['To protect', 'place, idea, culture, person, thing'],
    ['To change', 'culture, society, place, person'],
    ['To deliver', '[person, thing] to [place, culture, person]'],
    ['To learn', 'idea, culture, training, history']
  ]
  let selected = 'To defeat'
  let text = ''
  function update_focus() {
    campaign.focus = selected + ' ' + text
  }
</script>
<svelte:head><title>Choose a Group Focus</title></svelte:head>
<h1>Group Focus</h1>
<label>
  Choose a Group Focus:
  <select bind:value={selected} on:input={update_focus}>
    {#each options as [option]}
      <option>{option}</option>
    {/each}
  </select>
  <textarea
    bind:value={text}
    on:input={update_focus}
    placeholder={options.find(el => el[0] === selected)[1]}
  ></textarea>
</label>
<style>
  label {
    display: flex;
    flex-direction: column;
  }
</style>