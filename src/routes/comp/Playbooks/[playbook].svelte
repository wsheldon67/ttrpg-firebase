<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {playbook: params.playbook}
    }
  }
</script>
<script lang='ts'>
  import { component } from '$lib/data/playbooks/components'
  export let playbook:string
</script>
<svelte:head><title>The {playbook}</title></svelte:head>
<svelte:component this={component[playbook]} />