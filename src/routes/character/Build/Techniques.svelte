<script lang='ts'>
  import type { Data } from "$lib/data/character"
  import { techniques } from "$lib/data/techniques"
  import { playbook } from '$lib/data/playbooks'

  export let character:Data

  $: mastered = character.techniques.filter(el => el.level === 2).length
  $: learned = character.techniques.filter(el => el.level === 1).length

  async function get_techniques() {
    const applicable_techniques = techniques.filter(({tags})=>{
      return tags.includes(character.training) || tags.includes('Universal')
    })
    const all_techniques = [playbook[character.playbook].technique, ...applicable_techniques]
    const promises = all_techniques.map(({url}) => {
      return import(`../../comp/${url}.svelte`)
    })
    const componets = await Promise.all(promises)
    const res = all_techniques.map((technique, index) => {
      return {
        component: componets[index].default,
        ...technique
      }
    })
    return res
  }
  const promise = get_techniques()

  function check(level:number, name:string, e:any) {
    const {checked} = e.target
    if (checked) {
      character.techniques = [{level, name}, ...character.techniques]
    } else {
      character.techniques = character.techniques.filter(el => el.name !== name)
    }
  }

</script>
<p>Choose {1 - mastered} mastered and {1 - learned} learned technique:</p>
<div class='cardtainer'>
  {#await promise}
    Loading...
  {:then comps}
    {#each comps as {component, name} (name)}
      <div class='card'>
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
        <svelte:component this={component} hide start={2}/>
      </div>
    {/each}
  {/await}
</div>