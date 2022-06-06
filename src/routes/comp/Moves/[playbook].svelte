<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {playbook: params.playbook}
    }
  }
</script>
<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import { moves } from "$lib/data/playbooks/moves";
  export let playbook:string
  export let start:number = 1
  export let hide:boolean = false
</script>
<Header h={1} {start} {hide} title={playbook + ' Moves'} is_page_title>
  {#each moves[playbook] as {component}}
    <svelte:component this={component} start={start+1} hide/>
  {/each}
</Header>