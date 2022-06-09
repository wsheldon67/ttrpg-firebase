<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import { backgrounds } from "$lib/data/backgrounds";
  import type { Data } from "$lib/data/character";
  import { playbook } from '$lib/data/playbooks'

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  $: full_history = get_full_history(playbook[character.playbook].history)

function get_full_history(playbook_history:string[]):string[] {
  let res = JSON.parse(JSON.stringify(playbook_history))
  res[res.length-1] += ' I am committed to this group and purpose because '
  return res
}
</script>
  <Header h={1} {start} title='History & Background' {hide}>
    <p>Background</p>
    <ul>
      {#each character.backgrounds as background}
        <li>
          <Tooltip tip={backgrounds[background]}>{background}</Tooltip>
        </li>
      {/each}
    </ul>
    <p>
    {#each full_history as history, index}
      {history} {character.history[index]}
    {/each}
    </p>
    <p>My hometown is {character.hometown}.</p>
  </Header>