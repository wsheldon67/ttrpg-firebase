<script lang='ts'>
  import type { Playbook } from "$lib/data/playbooks"
  import Header from "$lib/c/Header.svelte"
  import Tip from '../_Tip.svelte'
  import Tooltip from "$lib/c/Tooltip.svelte"
  import { signed } from '$lib/pretty'

  export let playbook:Playbook
  export let start: number = 1
  export let hide: boolean = false
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
  <slot />
</Header>