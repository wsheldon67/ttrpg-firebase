<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte"
  import type {Data} from "$lib/data/character"
  import Adamant from "../../comp/Playbooks/Adamant/index.svelte"
  import Bold from "../../comp/Playbooks/Bold/index.svelte"
  import Guardian from '../../comp/Playbooks/Guardian/index.svelte'
  import Hammer from '../../comp/Playbooks/Hammer/index.svelte'
  import Icon from '../../comp/Playbooks/Icon/index.svelte'
  import Idealist from '../../comp/Playbooks/Idealist/index.svelte'
  import Pillar from '../../comp/Playbooks/Pillar/index.svelte'
  import Prodigy from '../../comp/Playbooks/Prodigy/index.svelte'
  import Rogue from '../../comp/Playbooks/Rogue/index.svelte'
  import Successor from '../../comp/Playbooks/Successor/index.svelte'
  import Destined from '../../comp/Playbooks/Destined/index.svelte'
  import Elder from '../../comp/Playbooks/Elder/index.svelte'
  import Foundling from '../../comp/Playbooks/Foundling/index.svelte'
  import Razor from '../../comp/Playbooks/Razor/index.svelte'

  import {playbooks, type Playbook} from '$lib/data/playbooks'

  export let character:Data
  $: selected = character.playbook

  const comps = {
    Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
    Destined, Elder, Foundling, Razor
  }

  function click(clicked_playbook:Playbook) {
    character.playbook = clicked_playbook.name
    character.techniques = [{name: clicked_playbook.technique.name, level: 2}]
  }
</script>

<svelte:component this={comps[selected]} start={1} hide/>
<h1>Playbooks</h1>
<div class='cardtainer'>
{#each playbooks as playbook (playbook.name)}
  <button
    class={'card' + (selected === playbook.name ? ' selected' : '')}
    on:click={()=>{click(playbook)}}
  >
    <Tooltip tip={`Play the ${playbook.name} if ${playbook.motivation}`} block>
      <h2>{playbook.name}</h2>
      <p>The {playbook.name} {playbook.blurb}</p>
    </Tooltip>
  </button>
{/each}
</div>
<style>
  h1 {
    margin-top: 1em;
  }
</style>