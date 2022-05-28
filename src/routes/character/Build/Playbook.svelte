<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte"
  import type {Data} from "$lib/data/character";
  import Adamant from "../../comp/Playbooks/Adamant/index.svelte"
  import Bold from "../../comp/Playbooks/Bold/index.svelte"
  import {playbooks as playbook_data} from '$lib/data/playbooks'

  export let character:Data
  $: selected = character.playbook

  const comps = {
    'Adamant': Adamant,
    'Bold': Bold
  }

  const playbooks = [
    {name: 'Adamant', text: `will fix the world, even if it means breaking all the rules.`, motivation: `contend with what "doing right" means in a complicated world.`},
    {name: 'Bold', text: `fights to live up to their self-image and earn others' trust and confidence.`, motivation: `build your reputation and leadership skills.`},
    {name: 'Guardian', text: `defends someone close to them, steadfast and watchful.`, motivation: `be the first to see danger coming and the last line of defense.`}
  ]

  function click(clicked_playbook:string) {
    character.playbook = clicked_playbook
    character.techniques = [{name: playbook_data[clicked_playbook].technique.name, level: 2}]
  }
</script>

<svelte:component this={comps[selected]} start={1} hide/>
<h1>Playbooks</h1>
<div class='cardtainer'>
{#each playbooks as {name, text, motivation} (name)}
  <button
    class={'card' + (selected === name ? ' selected' : '')}
    on:click={()=>{click(name)}}
  >
    <Tooltip tip={`Play the ${name} if you want to ${motivation}`} block>
      <h2>{name}</h2>
      <p>The {name} {text}</p>
    </Tooltip>
  </button>
{/each}
</div>