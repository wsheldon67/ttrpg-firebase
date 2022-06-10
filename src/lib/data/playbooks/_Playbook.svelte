<script lang='ts'>
  import type { Playbook } from "$lib/data/playbooks"
  import Header from "$lib/c/Header.svelte"
  import Tip from '$lib/c/Tip.svelte'
  import Tooltip from "$lib/c/Tooltip.svelte"
  import { signed } from '$lib/pretty'
  import type { Move } from "$lib/data/playbooks/moves";
  import { specials } from '$lib/data/playbooks/specials'

  export let playbook:Playbook
  export let moves:Move[]
  export let start: number = 1
  export let hide: boolean = false
  $: special = specials[playbook.name]
</script>
<Header h={1} {start} {hide} title={playbook.name}>
  <p><em>The {playbook.name} {playbook.blurb} Play the {playbook.name} if {playbook.motivation}</em></p>
  <Header h={2} {start} title='Principles'>
    <p>
      <Tooltip tip={playbook.principles[0].text}>{playbook.principles[0].name}</Tooltip>
      vs
      <Tooltip tip={playbook.principles[1].text}>{playbook.principles[1].name}</Tooltip>
    </p>
  </Header>
  <Header h={2} {start} title='Starting Stats'>
    <table>
      <tr>
        <td><Tip text='Creativity'/> {signed(playbook.stats[0])}</td>
        <td><Tip text='Focus'/> {signed(playbook.stats[1])}</td>
      </tr>
      <tr>
        <td><Tip text='Harmony'/> {signed(playbook.stats[2])}</td>
        <td><Tip text='Passion'/> {signed(playbook.stats[3])}</td>
      </tr>
    </table>
  </Header>
  <Header h={2} {start} title='Demeanor Options' hide>
    <ul class='list'>
      {#each playbook.demeanors as demeanor}
        <li>{demeanor}</li>
      {/each}
    </ul>
  </Header>
  <Header h={2} {start} title='Moves' hide>
    {#each moves as {component}}
      <svelte:component this={component} start={start+2} hide/>
    {/each}
  </Header>
  <svelte:component this={special.component} start={start+1} {hide} />
  <slot />
</Header>