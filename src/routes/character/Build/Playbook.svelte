<script lang='ts'>
  import Tooltip from "$lib/c/Tooltip.svelte"
  import {blank, type Data} from "$lib/data/character"
  import Adamant from "$lib/data/playbooks/Adamant/index.svelte"
  import Bold from "$lib/data/playbooks/Bold/index.svelte"
  import Guardian from '$lib/data/playbooks/Guardian/index.svelte'
  import Hammer from '$lib/data/playbooks/Hammer/index.svelte'
  import Icon from '$lib/data/playbooks/Icon/index.svelte'
  import Idealist from '$lib/data/playbooks/Idealist/index.svelte'
  import Pillar from '$lib/data/playbooks/Pillar/index.svelte'
  import Prodigy from '$lib/data/playbooks/Prodigy/index.svelte'
  import Rogue from '$lib/data/playbooks/Rogue/index.svelte'
  import Successor from '$lib/data/playbooks/Successor/index.svelte'
  import Destined from '$lib/data/playbooks/Destined/index.svelte'
  import Elder from '$lib/data/playbooks/Elder/index.svelte'
  import Foundling from '$lib/data/playbooks/Foundling/index.svelte'
  import Razor from '$lib/data/playbooks/Razor/index.svelte'

  import {playbooks, type Playbook} from '$lib/data/playbooks'

  export let character:Data
  let warned = false
  $: selected = character.playbook
  $: saved = character.name

  const comps = {
    Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
    Destined, Elder, Foundling, Razor
  }

  function click(clicked_playbook:Playbook) {
    character = JSON.parse(JSON.stringify(blank))
    character.playbook = clicked_playbook.name
    character.techniques = [{name: clicked_playbook.technique.name, level: 3}]
  }
</script>

<svelte:component this={comps[selected]} start={1} hide/>
<h1>Playbooks</h1>
{#if saved && !warned}
  <p class='bad'>Warning - changing your playbook will reset your character!</p>
  <button class='p' on:click={() => warned = true}>That's fine, unlock it.</button>
{/if}
<div class='cardtainer' class:warn={saved && !warned}>
{#each playbooks as playbook (playbook.name)}
  <button
    class={'card' + (selected === playbook.name ? ' selected' : '')}
    on:click={()=>{click(playbook)}}
    disabled={saved && !warned}
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
  .bad {
    color: var(--bad);
  }
  .warn {
    filter: saturate(.5) brightness(.5);
  }
</style>