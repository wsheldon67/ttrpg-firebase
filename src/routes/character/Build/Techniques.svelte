<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { techniques } from "$lib/data/techniques"
  import { playbook } from '$lib/data/playbooks'

  export let character:Data
  export let hide_limit:boolean = false

  $: mastered = character.techniques.filter(el => el.level === 2).length
  $: learned = character.techniques.filter(el => el.level === 1).length

  $: non_playbook = techniques.filter(({tags}) => {
    return tags.includes(character.training) || tags.includes('Universal')
  })
  $: comps = [playbook[character.playbook].technique, ...non_playbook]

  function check(level:number, name:string, e:any) {
    const {checked} = e.target
    if (checked) {
      character.techniques = [{level, name}, ...character.techniques]
    } else {
      character.techniques = character.techniques.filter(el => el.name !== name)
    }
  }
</script>
{#if !hide_limit}
  <p>Choose {1 - mastered} mastered and {1 - learned} learned technique:</p>
  <details>
    <summary>More Info</summary>
    <ul>
      <li>You must learn a technique before you can master it, therefore mastered techinques are automatically marked as learned as well.</li>
      <li>Your playbook technique is selected by default. GM approval is required to change it.</li>
    </ul>
  </details>
{/if}
<div class='cardtainer'>
{#each comps as {component, name} (name)}
  <div class='card'>
    <svelte:component this={component} hide start={2}/>
    <div>
      <label>
        <input type='checkbox'
          on:input={e => check(1,name, e)}
          checked={character.techniques.some(el => el.name === name && el.level >= 1)}
        />
        Learned
      </label>
      <label>
        <input type='checkbox'
          on:input={e => check(2, name, e)}
          checked={character.techniques.some(el => el.name === name && el.level >= 2)}
        />
        Mastered
      </label>
    </div>
  </div>
{/each}
</div>
<style>
  div.cardtainer {
    margin-bottom: 2em;
  }
</style>