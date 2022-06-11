<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {playbook: params.playbook}
    }
  }
</script>
<script lang='ts'>
  //import { component } from '$lib/data/playbooks/components'
  import Playbook from '$lib/data/playbooks/_Playbook.svelte'
  import { playbook as playbooks } from '$lib/data/playbooks'
  import { moves } from '$lib/data/playbooks/moves'
  export let playbook:string
</script>
<svelte:head><title>The {playbook}</title></svelte:head>
<Playbook playbook={playbooks[playbook]} moves={moves[playbook]}/>